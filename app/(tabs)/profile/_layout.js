/**
 * @fileOverview This is a component for the Profile page, which displays various sections of the app.
 */

import { Stack } from "expo-router";
import { useFonts } from "expo-font";

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