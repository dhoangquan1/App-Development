/**
 * @fileOverview This is a component for the Authentication pages, which allow users to log in or sign up.
 */

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