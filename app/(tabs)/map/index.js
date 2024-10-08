/**
 * @fileOverview This is a component for the Map page, which displays a map with nearby activities.
 * @module (Tabs)/Map
 */

import React, {useState, useEffect} from 'react';
import {Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {Text, View, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity} from 'react-native';
import MapView from 'react-native-map-clustering';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router'

import styles from './index.style';
import { COLORS, FONT, SIZES, SHADOWS, icons } from '../../../constants';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { useAuth } from '../../../context/AuthContext';
import useSupabase from '../../../services/useSupabase';
import { getFilteredActivities } from '../../../services/getData';

import MiniActivitiesCard from '../../../components/common/cards/mini-activities/miniActivitiesCard';
import SearchBar from '../../../components/common/searchBar/searchBar';
import CategoryList from '../../../components/common/categoryList/categoryList'


const categories = ["All", "Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];

/**
 * Map Component for displaying activities on the map
 * @returns {JSX.Element} The map page
 */
const Map = () => {
  const router = useRouter();
  const [showActivityCard, setShowActivityCard] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const {user, userLocation, setUserLocation} = useAuth();
  const [form, setForm] = useState({
    name: null,
    activity: "All", 
    river_id: null,
    town: null,
    tags: []
  });

  {/*______________ASK FOR USER LOCATION___________________ */}
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setUserLocation({
          longitude: -71.1246826115983,
          latitude: 42.40776531464709,
        })
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      setUserLocation({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      })
    })()
  }, [])

  const {data, isLoading, refetch, error } = useSupabase(() => getFilteredActivities(userLocation.longitude, userLocation.latitude, form, user?.id));

  useEffect(() => {
    refetch()
  }, [form])


  const handleNavigate = (item) => {
    router.push({
      pathname: `/activities/[id]`,
      params: {id : item.id}
    });
  };

  const handleMarkerPress = (item) => {
    setShowActivityCard(item);
  }

  return (
    <View style={styles.container}>
      
          <View style={StyleSheet.absoluteFill} >
            {userLocation === null ? (
              <ActivityIndicator size='large' color={COLORS.primary} />
            ) : (
              <MapView 
              style={StyleSheet.absoluteFill}
              removeClippedSubviews={false}
              clusterColor={COLORS.tertiary}
              clusterTextColor={COLORS.primary}
              region={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
                latitudeDelta: 2, 
                longitudeDelta: 2,
              }}
              showsUserLocation={true}
            >
              {!isLoading && (
                data?.map((item) => (
                  <Marker
                    key={item.id}
                    coordinate={{
                      longitude: item.longitude,
                      latitude: item.latitude,
                    }}
                    title={item.name}
                    onPress = {() => handleMarkerPress(item)}
                  >    
                    <View style={styles.activityMarker(item.activity)}>
                      {icons.IconSelect(item.activity, 16)}
                    </View>
                  </Marker>
                ))
              )}
              </MapView>
            )}
            
            <SafeAreaView style={styles.searchBar}>
              <SearchBar form={form} setForm={setForm} isFiltering={isFiltering} setIsFiltering={setIsFiltering}/>
              <CategoryList 
                categories={categories} 
                setActiveTab={(item) => setForm({...form, activity: item})} 
                activeTab={form.activity} 
              />
            </SafeAreaView>


            <View style={{position: 'absolute', bottom: 75, marginHorizontal: 16}}>
              {showActivityCard && (
                <MiniActivitiesCard 
                  item = {showActivityCard}
                  handleNavigate={() => router.push(`/activities/${showActivityCard.id}`)}
                />
              )}
            </View>
            
          </View>      
    </View>
  );
}

export default Map
