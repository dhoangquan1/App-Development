import { Stack } from "expo-router";


const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name="log-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
    </Stack>
  )
}

export default _layout