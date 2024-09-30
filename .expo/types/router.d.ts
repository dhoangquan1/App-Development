/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/log-in` | `/(auth)/sign-up` | `/(tabs)` | `/(tabs)/bookmark` | `/(tabs)/bookmark/bookmark` | `/(tabs)/bookmark/bookmark.style` | `/(tabs)/explore` | `/(tabs)/explore/` | `/(tabs)/explore/create/create` | `/(tabs)/explore/create/create.style` | `/(tabs)/explore/index.style` | `/(tabs)/home` | `/(tabs)/home/` | `/(tabs)/map` | `/(tabs)/profile` | `/_sitemap` | `/activities/ActivitiesDetails.style` | `/bookmark` | `/bookmark/bookmark` | `/bookmark/bookmark.style` | `/explore` | `/explore/` | `/explore/create/create` | `/explore/create/create.style` | `/explore/index.style` | `/home` | `/home/` | `/log-in` | `/map` | `/profile` | `/rivers/RiversDetails.style` | `/sign-up`;
      DynamicRoutes: `/activities/${Router.SingleRoutePart<T>}` | `/rivers/${Router.SingleRoutePart<T>}` | `/search/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/activities/[id]` | `/rivers/[id]` | `/search/[id]`;
    }
  }
}
