import { useRouter, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { supabase } from '../lib/supabase';
import { useEffect } from "react";
import { getUserData } from "../services/getData"; 


//import * as SplashScreen from "expo-splash-screen";

//SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const {setAuth, setUserData} = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if(session){
        setAuth(session?.user);
        updateUserData(session?.user);
        router.replace('/home');
      } else{
        setAuth(null);
        router.replace('/log-in')
      }
    })
  }, [])

  const updateUserData = async (user) => {
    let res = await getUserData(user?.id);
    if(res.success) setUserData(res.data);
  }

  const [fontsLoaded] = useFonts({
    RobotoLight: require("../assets/fonts/Roboto-Light.ttf"),
    RobotoThin: require("../assets/fonts/Roboto-Thin.ttf"),
    RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
    RobotoSerifBlack: require("../assets/fonts/RobotoSerif-Black.ttf"),
    RobotoFlex: require("../assets/fonts/RobotoFlex-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
      <Stack initialRouteName="index">
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