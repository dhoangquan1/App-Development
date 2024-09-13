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
import { getAllActivities, getFilteredActivities } from '../../services/getData';
import { COLORS } from '../../constants';
import MiniActivitiesCard from '../../components/common/cards/mini-activities/miniActivitiesCard';
import { Button, CheckBox } from '@rneui/themed';
// import { Site } from '../../components/site.js';

/**
 * Map Component for displaying activities on the map
 * @returns {JSX.Element} The map page
 */
const map = () => {
  let rivers = [];
  let activities = [];

  const [userLocation, setUserLocation] = useState(null);
  const { allActivities, isLoadingA, errorA } = useSupabase(getAllActivities);
  const { data, isLoading, error } = useSupabase(getFilteredActivities);

  const [show, setShow] = useState(false);
  const [activity, setActivity] = useState(null);

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

  const showActivity = (activity) => {
    setShow(true);
    setActivity(activity);
  }

  const [landOn, setLandOn] = useState(false);
  const [swimmingOn, setSwimmingOn] = useState(false);
  const [paddlingOn, setPaddlingOn] = useState(false);
  const [fishingOn, setFishingOn] = useState(false);

  const [showFilters, setShowFilters] = useState(false);
  const [showRivers, setShowRivers] = useState(false);
  const [showActivities, setShowActivities] = useState(false);

  const sendFilter = () => {
    getFilteredActivities(rivers, activities);
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

            <View style={{position: 'absolute', top: 150}}>
              <Button onPress={() => {setShowFilters(true)}} title="Search..."/>
                {showFilters ? 
                  (<View>
                    <Button onPress={() => {setShowRivers(true)}} title="Rivers..."/>
                    {showRivers ? 
                    (<></>) 
                    : <></>}
                    <Button onPress={() => {setShowActivities(true)}} title="Activities..."/>
                    {showActivities ? 
                    (<View>
                      {isLoadingA ? (
                        <ActivityIndicator size='large' color={COLORS.primary} />
                      ) : errorA ? (
                        <Text>Something went wrong</Text>
                      ) : (
                        <View>
                          <CheckBox 
                            title="Land Activities" 
                            checked={landOn}
                            onPressIn={() => setLandOn(!landOn)}
                          />
                          <CheckBox 
                            title="Swimming" 
                            checked={swimmingOn}
                            onPressIn={() => setSwimmingOn(!swimmingOn)}
                          />
                          <CheckBox 
                            title="Paddling" 
                            checked={paddlingOn}
                            onPressIn={() => setPaddlingOn(!paddlingOn)}
                          />
                          <CheckBox 
                            title="Fishing" 
                            checked={fishingOn}
                            onPressIn={() => setFishingOn(!fishingOn)}
                          />
                        </View>
                      )}
                    </View>) 
                    : <></>}
                    <Button title="Submit" onPress={() => {sendFilter()}}/>
                  </View>
                  )
                : (<></>)}
            </View>

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