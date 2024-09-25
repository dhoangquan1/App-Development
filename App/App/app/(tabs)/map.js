/**
 * @fileOverview This is a component for the Map page, which displays a map with nearby activities.
 * @module (Tabs)/Map
 */

import React, {useState, useEffect, useRef} from 'react';
import MapView, { MapCalloutSubview, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Platform, Text, View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import MapSearch from '../../components/mapSearch';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import useSupabase from '../../services/useSupabase';
import { getAllActivities, getFilteredActivities, getAllRivers } from '../../services/getData';
import { COLORS } from '../../constants';
import MiniActivitiesCard from '../../components/common/cards/mini-activities/miniActivitiesCard';
import { Button, CheckBox } from '@rneui/themed';
// import { Site } from '../../components/site.js';

/**
 * Map Component for displaying activities on the map
 * @returns {JSX.Element} The map page
 */
const map = () => {

  const [userLocation, setUserLocation] = useState(null);
  // const { allActivities, isLoadingA, errorA } = useSupabase(getAllActivities);
  const { data, isLoading, error } = useSupabase(getFilteredActivities(null, null));
  const [activities, setActivities] = useState(null);

  const [show, setShow] = useState(false);
  const [activity, setActivity] = useState(null);
  
  const activityFilters = [null, "Land", "Paddling", "Fishing", "Swimming"];
  const [currentActivity, setCurrentActivity] = useState(activityFilters[0]);
  const [currentRiver, setCurrentRiver] = useState(null);

  const ipswich = '09cec781-00d8-4ec2-8217-dea3243f0d48';
  const nashua = 'a43ddb01-654a-4f7c-a288-d16732a842ce';

  const massRivers = {
    longitude: 42.40776531464709,
    latitude: -71.1246826115983,
    longitudeDelta: 2,
    latitudeDelta: 2,
  }
  /**
   * Get user location
   */
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      setUserLocation({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: 2,
        latitudeDelta: 2,
      })
    })()
  }, [])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFilteredActivities(currentActivity, currentRiver)();
        setActivities(data);
        console.log(`Ipswich River ID: ${ipswich}`);
        console.log(`Nashua River ID: ${nashua}`);
        console.log(`Our River ID: ${currentRiver}`);
        console.log("\n");
      } catch (error) {
        console.error('Error updating map:', error);
      }
    }
    
    fetchData();
  }, [currentActivity, currentRiver])

  const showActivity = (activity) => {
    setShow(true);
    setActivity(activity);
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <View style={styles.container} >
            {/* <Site /> */}
            <MapView 
              style={StyleSheet.absoluteFill}
              region={userLocation}
              showsUserLocation={true}
            >
              {activities?.map((item) => {
                if(item.longitude !== null)
                  return (
                    <Marker
                      key={`${item.id}`}
                      coordinate={{
                        longitude: item.longitude,
                        latitude: item.latitude,
                      }}
                      title={item.name}
                      onPress = {() => {showActivity(item), console.log('Marker clicked.')}}
                    >
                      {<FontAwesome name="map-marker" size={24} color='red' />}
                    </Marker>
                  )
              })}
            </MapView>

            <MapSearch 
              onSelectActivity={setCurrentActivity}
              onSelectRiver={setCurrentRiver}
            />

            <View style={{position: 'absolute', bottom: 75}}>
              {show ?
                (<MiniActivitiesCard 
                  item = {activity}
                  handleNavigate={() => router.push(`../../app/activities/${activity.id}`)}
                  />)
                : (<></>) }
            </View>
            
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