/**
 * @fileOverview This is a component for the Tabs layout, which provides a tab bar for navigation.
 */
import { useEffect } from 'react';
import { Redirect, Tabs } from 'expo-router';
import TabBar from '../../components/common/tabBar/TabBar';
import { useAuth } from '../../context/AuthContext';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../../constants';

/**
 * Layout Component for the Navigation Tabs
 * @returns {JSX.Element} The navigation tab bar.
 */

export default function TabLayout() {
  
  
  return (
    <>
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
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
          }}
        />

      </Tabs>

      <StatusBar style='dark' />
    </>
    
  );
}