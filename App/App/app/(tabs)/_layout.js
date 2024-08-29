import { Redirect, Tabs } from 'expo-router';
import TabBar from '../../components/common/tabBar/TabBar';
import { useAuth } from '../../context/AuthContext';
import { StatusBar } from 'react-native';

// TODO : Document TabLayout component

/**
 * Layout Component for the Navigation Tabs
 * @returns {JSX.Element} The navigation tab bar.
 */

export default function TabLayout() {
  const {setAuth} = useAuth();

  if(setAuth === null) return <Redirect href="/sign-in" />;
  
  return (
    <Tabs tabBar={props => <TabBar {...props}/>}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown : false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          headerShown : false,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          headerShown : false,
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Saved',
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notif',
        }}
      />

    </Tabs>

    
  );
}