/**
 * @fileOverview This is a component for the Home page, which displays various sections of the app.
 * @module (Tabs)/Home
 */

import { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Text, ActivityIndicator } from "react-native";
import { Stack, useRouter } from "expo-router";

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


const Home = () => {
  const router = useRouter()
  const {userLocation} = useAuth();
  const [searchTerm, setSearchTerm] = useState("");

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
            <MassRiversCard />
            <Leavenotrace />
            <Rivers />
            <Activities longitude={userLocation.longitude} latitude={userLocation.latitude}/>
            <View style={{paddingBottom: 75}}/>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;