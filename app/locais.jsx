import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, FlatList, Text, View } from 'react-native';
import api from '../src/services/api';
import { colors } from '../src/styles/theme';

export default function LocaisScreen() {
  const [locais, setLocais] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchLocais = async () => {
    setLoading(true);
    try {
      const response = await api.get('/places');
      setLocais(response.data);
    } catch {
      Alert.alert('Erro', 'Não foi possível carregar os locais.');
    } finally {
      setLoading(false);
    }
  };

  const deleteLocal = async (id) => {
    try {
      await api.delete(`/places/${id}`);
      Alert.alert('Sucesso', 'Local excluído!');
      fetchLocais();
    } catch {
      Alert.alert('Erro', 'Não foi possível excluir o local.');
    }
  };

  useEffect(() => {
    fetchLocais();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: colors.background }}>
      <Text style={{ fontSize: 24, marginBottom: 10, color: colors.text }}>Locais Frescos</Text>
      {loading ? <ActivityIndicator size="large" color={colors.primary} /> : (
        <FlatList
          data={locais}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ padding: 10, marginVertical: 5, backgroundColor: '#fff', borderRadius: 8 }}>
              <Text style={{ color: colors.text }}>{item.name}</Text>
              <Button title="Excluir" onPress={() => deleteLocal(item.id)} />
            </View>
          )}
        />
      )}
    </View>
  );
}
