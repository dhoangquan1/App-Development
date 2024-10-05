import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,

} from "react-native";


import { COLORS, icons, images, SIZES } from "../../constants/index.js";
import styles from "./PostsDetails.style.js";
import Entypo from '@expo/vector-icons/Entypo';

import { getPost } from "../../services/getData.js";
import useSupabase from "../../services/useSupabase.js";

import { ScreenHeaderBtn } from "../../components/index.js";
import Navigation from "../../components/activity-details/navigation/Navigation.js";
import AmenitiesList from "../../components/activity-details/amenities/AmenitiesList.js";


const categories = ["Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];

const PostsDetails = () => {
  const {id} = useLocalSearchParams();
  const router = useRouter();

  const { data, refetch, isLoading, error } = useSupabase(() => getPost(`${id}`));

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch()
    setRefreshing(false)
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.neutral }}>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerStyle: {
            top: 0,
            backgroundColor: COLORS.neutral,
          },
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          
          headerTitleAlign: "center",
          headerTitle: () => (
            <View style={styles.header}>
              <Image
                source={images.logo}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              />
              <Text style={styles.headerText}> Explore Your Rivers</Text>
            </View>
          ),
        }}
      />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        styles={{flex: 1}}
        refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <>
          <ImageBackground
            source = {{uri: (data.image)}}
            resizeMode= 'cover'
            style = {styles.backgroundRiver}
          >
            <View style={styles.stomach}/>
          </ImageBackground>
          
          <View style = {styles.infoMainContainer}> 
              <View style = {styles.infoContainer}>

                {/*Top Catergory Section */}
                <View style={styles.infoTextContainer}>
                  <View style={styles.infoTopContainer}>
                    <View style={styles.category(data.activity)}>
                      {icons.IconSelect(data.activity, 12)}
                      <Text style={styles.categoryText}>{data.activity}</Text>
                    </View>
                  </View>
                </View>

                {/*Name and Ratings Section */}
                <View style={styles.infoTextContainer}>
                  <Text style = {styles.activityName}> 
                    {data.name} 
                  </Text>
                  <View style={styles.address}>
                    <Entypo name="location" size={16} color={COLORS.primary} />
                    <Text style={styles.addressText}>{data.address}</Text>
                  </View>
                </View>

                {/*About Section */}
                {data.description && (
                  <View style={styles.infoTextContainer}>
                    <Text style = {styles.title}>
                      About
                    </Text>
                    <Text style = {styles.activityDescription}>
                      {data.description}
                    </Text>
                  </View>
                )}


                {/*Amenities */}
                {data.users_posts_tags[0] && (
                  <View style = {styles.infoTextContainer}>
                    <Text style = {styles.title}>
                      Amenities
                    </Text>
                    <AmenitiesList data={data.users_posts_tags}/>
                  </View>
                )}
                
                
                {/*Navigation Section */}
                <View style = {styles.infoTextContainer}>
                  <Text style = {styles.title}>
                    Navigation
                  </Text>
                  <Navigation item={data} />
                </View>

              </View>
            </View>
          </>
        )}
        <View style={{paddingBottom: 75}}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostsDetails;