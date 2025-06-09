import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { colors } from '../src/styles/theme';

type Dica = {
  id: number;
  text: string;
};

export default function DicasScreen() {
  const [dicas] = useState<Dica[]>([
    { id: 1, text: 'Beba pelo menos 2 litros de água por dia.' },
    { id: 2, text: 'Evite bebidas alcoólicas e com cafeína em dias quentes.' },
    { id: 3, text: 'Use roupas leves e de cores claras.' },
    { id: 4, text: 'Leve uma garrafinha de água sempre com você.' },
    { id: 5, text: 'Consuma frutas ricas em água como melancia e melão.' },
  ]);

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: colors.background }}>
      <Text style={{ fontSize: 24, marginBottom: 10, color: colors.text }}>Dicas de Hidratação</Text>
      <FlatList
        data={dicas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, marginVertical: 5, backgroundColor: '#fff', borderRadius: 8 }}>
            <Text style={{ color: colors.text }}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}
