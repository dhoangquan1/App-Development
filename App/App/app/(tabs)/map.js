import React, {useState, useEffect, useRef} from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Platform, Text, View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import useSupabase from '../../services/useSupabase';
import { getAllActivities } from '../../services/getData';
import { COLORS } from '../../constants';
import MiniActivitiesCard from '../../components/common/cards/mini-activities/miniActivitiesCard';
// import { Site } from '../../components/site.js';


const map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const { data, isLoading, error } = useSupabase(getAllActivities);

  const [show, setShow] = useState(false);
  const [activity, setActivity] = useState(null);

  const massRivers = {
    longitude: 42.40776531464709,
    latitude: -71.1246826115983,
    longitudeDelta: 2,
    latitudeDelta: 2,
  }

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
              {data?.map((item) => {
                if(item.longitude !== null)
                  return (
                    <Marker
                      key={`${item.id}`}
                      coordinate={{
                        longitude: item.longitude,
                        latitude: item.latitude,
                      }}
                      title={item.name}
                      // description='Details'
                      onPress = {() => {showActivity(item), console.log('Marker clicked.')}}
                    >
                      {<FontAwesome name="map-marker" size={24} color='red' />}
                    </Marker>
                  )
              })}
            </MapView>

            {show ?
              (<MiniActivitiesCard 
                item = {activity}
                handleNavigate={() => router.push(`../../app/activities/${activity.id}`)}
                />)
              : (<></>) }
            
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