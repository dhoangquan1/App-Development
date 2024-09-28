/**
 * @fileOverview This is a component for the Home page, which displays various sections of the app.
 * @module (Tabs)/Home
 */

import { useState, useEffect } from "react";
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

const categories = ["Nearby", "Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];

const Home = () => {
  const router = useRouter()
  const [userLocation, setUserLocation] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState(categories[0]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setUserLocation({
          longitude: 42.40776531464709,
          latitude: -71.1246826115983,
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

            <Welcome
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleClick={() => {
                if (searchTerm) {
                  router.push(`/search/${searchTerm}`)
                }
              }}
            />
            <CategoryList categories={categories} setActiveTab={setActiveTab} activeTab={activeTab}/>
            <MassRiversCard />
            <Leavenotrace />
            <Rivers />
            <Activities key={activeTab} longitude={userLocation.longitude} latitude={userLocation.latitude} category={activeTab}/>
            
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;