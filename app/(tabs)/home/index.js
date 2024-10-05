/**
 * @fileOverview This is a component for the Home page, which displays various sections of the app.
 * @module (Tabs)/Home
 */

import { useState, useEffect, useCallback } from "react";
import { SafeAreaView, ScrollView, View, Text, ActivityIndicator } from "react-native";
import { Stack, useRouter } from "expo-router";
import * as Location from 'expo-location';

import { COLORS, icons, images, SIZES } from "../../../constants";
import {
  Leavenotrace,
  Rivers,
  Activities,
  ScreenHeaderBtn,
  Welcome,
  CategoryList
} from "../../../components";
import MassRiversCard from "../../../components/home/mass-rivers/massRiversCard";
import { useAuth } from "../../../context/AuthContext";
import SearchBar from "../../../components/common/searchBar/searchBar";
import { useForm } from "../../../context/FormContext";


const categories = ["All", "Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];

const Home = () => {
  const router = useRouter()
  const {userLocation, setUserLocation} = useAuth();
  const {form, setForm, setIsResetingSearch, isFiltering, setIsFiltering} = useForm();


{/*______________PUSH TO SEARCH PAGE WHEN USER IS FILTERING/SEARCHING___________________ */}
  useEffect(() => {
    if(isFiltering) {
      router.push({
        pathname: `/search/HomeSearch`,
      });
    }
  }, [isFiltering]) 

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


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.neutral }}>
      
      <ScrollView>
        {userLocation===null ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : (
          <View style={{flex: 1, padding: SIZES.medium}}>

            <Welcome/>
            <SearchBar 
              form={form} 
              setForm={setForm} 
              isFiltering={isFiltering} 
              setIsFiltering={setIsFiltering}
            />
            <MassRiversCard />
            <Leavenotrace />
            <Rivers />
            <Activities/>
            <View style={{paddingBottom: 75}}/>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;