import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Text, View } from 'react-native';
import api from '../src/services/api';
import { colors } from '../src/styles/theme';

export default function DicasScreen() {
  const [dicas, setDicas] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDicas = async () => {
    setLoading(true);
    try {
      const response = await api.get('/tips');
      setDicas(response.data);
    } catch {
      Alert.alert('Erro', 'Não foi possível carregar as dicas.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDicas();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: colors.background }}>
      <Text style={{ fontSize: 24, marginBottom: 10, color: colors.text }}>Dicas de Hidratação</Text>
      {loading ? <ActivityIndicator size="large" color={colors.primary} /> : (
        <FlatList
          data={dicas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ padding: 10, marginVertical: 5, backgroundColor: '#fff', borderRadius: 8 }}>
              <Text style={{ color: colors.text }}>{item.text}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
