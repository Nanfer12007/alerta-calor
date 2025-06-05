import { Text, View } from 'react-native';
import { colors } from '../src/styles/theme';

export default function SobreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
      <Text style={{ fontSize: 24, marginBottom: 10, color: colors.text }}>Sobre o App</Text>
      <Text style={{ textAlign: 'center', color: colors.text, padding: 20 }}>
        Este aplicativo foi criado para alertar a população sobre eventos de calor extremo e oferecer dicas de saúde e segurança.
      </Text>
      <Text style={{ textAlign: 'center', color: colors.text, padding: 20 }}>
        Desenvolvido com ❤️ usando React Native e Expo Router.
      </Text>
    </View>
  );
}
