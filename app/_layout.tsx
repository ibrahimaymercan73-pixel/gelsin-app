import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="role-select" />
        <Stack.Screen name="login" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="new-task" options={{ presentation: 'modal' }} />
        <Stack.Screen name="task/[id]" />
        <Stack.Screen name="tracking" />
        <Stack.Screen name="qr-show" options={{ presentation: 'modal' }} />
        <Stack.Screen name="qr-scan" options={{ presentation: 'fullScreenModal' }} />
        <Stack.Screen name="chat" />
      </Stack>
    </>
  );
}
