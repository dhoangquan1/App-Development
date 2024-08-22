import { Stack } from "expo-router";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

const Layout = () => {

  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
};

export default Layout;