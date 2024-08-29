import { Stack, Redirect } from "expo-router";
import { useAuth } from "../../context/AuthContext";


const _layout = () => {
  const { user } = useAuth();
  if (user !== null) return <Redirect href="/home" />;

  return (
    <Stack>
        <Stack.Screen name="log-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
    </Stack>
  )
}

export default _layout