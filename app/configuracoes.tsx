import { useState } from 'react';
import { Alert, Button, Switch, Text, TextInput, View } from 'react-native';
import { colors } from '../src/styles/theme';

export default function ConfiguracoesScreen() {
  const [threshold, setThreshold] = useState<string>('35');
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);

  const saveSettings = (): void => {
    Alert.alert(
      'Configurações salvas',
      `Limiar: ${threshold}°C\nNotificações: ${notificationsEnabled ? 'Ativadas' : 'Desativadas'}`
    );
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: colors.background }}>
      <Text style={{ fontSize: 24, marginBottom: 10, color: colors.text }}>Configurações</Text>

      <Text style={{ color: colors.text }}>Limiar de Temperatura (°C)</Text>
      <TextInput
        value={threshold}
        onChangeText={setThreshold}
        keyboardType="numeric"
        style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 20, padding: 10, borderRadius: 8 }}
      />

      <Text style={{ color: colors.text }}>Notificações</Text>
      <Switch
        value={notificationsEnabled}
        onValueChange={setNotificationsEnabled}
        thumbColor={notificationsEnabled ? colors.primary : '#ccc'}
      />

      <Button title="Salvar" onPress={saveSettings} color={colors.secondary} />
    </View>
  );
}
