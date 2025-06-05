import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { colors } from '../src/styles/theme';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: colors.background }}>
      <Text style={{ fontSize: 24, marginBottom: 10, color: colors.text }}>Alerta de Calor Extremo!</Text>
      <Text style={{ marginBottom: 20, color: colors.text }}>
        Fique atento às temperaturas elevadas. Cuide da sua saúde!
      </Text>

      <Button title="Dicas" onPress={() => router.push('/dicas')} />
      <Button title="Locais Frescos" onPress={() => router.push('/locais')} />
      <Button title="Configurações" onPress={() => router.push('/configuracoes')} />
      <Button title="Sobre" onPress={() => router.push('/sobre')} />
    </View>
  );
}
