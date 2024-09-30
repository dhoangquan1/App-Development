/**
 * @fileOverview This is a component for the Map page, which displays a map with nearby activities.
 * @module (Tabs)/Map
 */

import React, {useState, useEffect, useRef} from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Platform, Text, View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import useSupabase from '../../services/useSupabase';
import { getAllActivities } from '../../services/getData';
import { COLORS } from '../../constants';
import { useAuth } from '../../context/AuthContext';

/**
 * Map Component for displaying activities on the map
 * @returns {JSX.Element} The map page
 */
const map = () => {
  const {user, userLocation} = useAuth();
  const { data, isLoading, error } = useSupabase(() => getAllActivities(userLocation.longitude, userLocation.latitude, null, user?.id));

  return (
    <View style={styles.container}>
      {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <View style={styles.container} >
            <MapView 
              style={StyleSheet.absoluteFill}
              region={userLocation}
              showsUserLocation={true}
            >
            {data?.map((item) => {
              if(item.longitude !== null)
                return (
                  <Marker
                    key={`${item.id}`}
                    coordinate={{
                      longitude: item.longitude,
                      latitude: item.latitude,
                    }}
                  >
                    {<FontAwesome name="map-marker" size={24} color='red' />}
                  </Marker>
                )
            })}
            </MapView>
          </View>      
        )
      }
    </View>
  );
}

export default map

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 1,
    bottom: 100,
    heigh: 50,
    position: 'absolute',
  },
  cardsContainer: {
    gap: 10,
  },
});