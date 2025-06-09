// app/locais.tsx
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, FlatList, Text, TextInput, View } from 'react-native';
import fsq from '../src/services/placesApi';
import { colors } from '../src/styles/theme';

type Place = {
  fsq_id: string;
  name: string;
  location: { address?: string; locality?: string };
};

export default function LocaisScreen() {
  const [query, setQuery] = useState('parque');
  const [locais, setLocais] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    setLoading(true);
    try {
      const response = await fsq.get('/search', {
        params: {
          ll: '-23.532,-46.792', // latitude,longitude de Osasco
          query,
          limit: 10,
        },
      });
      setLocais(response.data.results);
    } catch (err) {
      Alert.alert('Erro', 'Falha ao buscar locais.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: colors.background }}>
      <TextInput
        placeholder="Buscar locais"
        value={query}
        onChangeText={setQuery}
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 10 }}
      />
      <Button title="Buscar" onPress={search} />

      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <FlatList
          data={locais}
          keyExtractor={(item) => item.fsq_id}
          renderItem={({ item }) => (
            <View style={{ padding: 10, marginVertical: 5, backgroundColor: '#fff', borderRadius: 8 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
              {item.location.address && (
                <Text style={{ color: colors.text }}>{item.location.address}</Text>
              )}
              {item.location.locality && (
                <Text style={{ color: colors.text }}>{item.location.locality}</Text>
              )}
            </View>
          )}
        />
      )}
    </View>
  );
}
