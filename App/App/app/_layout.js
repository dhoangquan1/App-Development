import { useRouter,router, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { supabase } from '../lib/supabase';
import { useEffect } from "react";
import { getUserData } from "../services/getData";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const {setAuth, setUserData} = useAuth();
  const router = useRouter();

  const updateUserData = async (user) => {
    let res = await getUserData(user.id);
    if(res.success) setUserData(res.data);
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if(session){
        setAuth(session.user);
        updateUserData(session.user);
        router.replace('/home');
      } else{
        setAuth(null);
        router.replace('/log-in')
      }
    })
  }, [])

  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
  )
};

const _layout = () => {
  return (
    <AuthProvider>
      <Layout/>
    </AuthProvider>
  )
}

export default _layout;