/**
 * @fileOverview This is a component for the Create page, which allows users to create new posts.
 */

import { Stack } from "expo-router";
import { useFonts } from "expo-font";

/**
 * The Layout component for the Create Page.
 *
 * @component
 * 
 * @returns {JSX.Element} The layout component.
 */

const Layout = () => {

  return (
    <Stack>
      <Stack.Screen name="create" options={{ headerShown: false }} />
    </Stack>
  )
};

export default Layout;