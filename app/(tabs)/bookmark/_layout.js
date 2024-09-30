/**
 * @fileOverview This is a component for the Bookmark page, which allows users to search for posts and create new posts.
 */

import { Stack } from "expo-router";
import { useFonts } from "expo-font";

/**
 * The Layout component for the Bookmark Page.
 *
 * @component
 * 
 * @returns {JSX.Element} The layout component with a configured navigation stack.
 */

const Layout = () => {

  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
};

export default Layout;