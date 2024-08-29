import { Stack } from "expo-router";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

// TODO: Document home page layout

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

/**
 * Layout Component for the Home Page
 * @returns {JSX.Element} 
 */
const Layout = () => {

  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
};

export default Layout;