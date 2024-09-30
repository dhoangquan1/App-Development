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
  TurboModuleRegistry
} from "react-native";
import * as Linking from 'expo-linking';
import { ScreenHeaderBtn} from "../../components/index.js";
import { COLORS, icons, images, SIZES } from "../../constants/index.js";
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import styles from "./ActivitiesDetails.style.js";
import Entypo from '@expo/vector-icons/Entypo';
import { getActivity, getActivityReviews } from "../../services/getData.js";
import useSupabase from "../../services/useSupabase.js";
import Navigation from "../../components/activity-details/navigation/Navigation.js";
import AmenitiesList from "../../components/activity-details/amenities/AmenitiesList.js";
import ReviewList from "../../components/common/reviewList/reviewList.js";
import ReviewDisplay from "../../components/common/reviewDisplay/reviewDisplay.js";

const categories = ["Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];

const ActivitiesDetails = () => {
  const {id} = useLocalSearchParams();
  const router = useRouter();

  const { data, refetch, isLoading, error } = useSupabase(() => getActivity(`${id}`));

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
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          
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
        styles={{position: 'absolute'}}
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
                  <View style={styles.rating}>
                    <StarRatingDisplay
                      rating={data.ave_rating}
                      color={COLORS.secondary}
                      starSize={25}
                      starStyle={{marginHorizontal: 2}}
                    />
                    <Text style={styles.aveRatingText}> {data.ave_rating.toFixed(1)} </Text>
                    <Text style={styles.reviewNumText}>({data.rating_count} reviews)</Text>
                  </View>
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

                {/*Website Link Button */}
                {data.link && (
                  <View style={styles.infoTextContainer}>
                    <TouchableOpacity 
                      style={styles.button}
                      onPress={() => Linking.openURL(`${data.link}`)}
                    >
                      <Text style={styles.buttonText}>Visit website</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {/*Amenities */}
                {data.activities_tags[0] && (
                  <View style = {styles.infoTextContainer}>
                    <Text style = {styles.title}>
                      Amenities
                    </Text>
                    <AmenitiesList data={data.activities_tags}/>
                  </View>
                )}
                
                
                {/*Navigation Section */}
                <View style = {styles.infoTextContainer}>
                  <Text style = {styles.title}>
                    Navigation
                  </Text>
                  <Navigation item={data} />
                </View>

                {/*Reviews Section */}
                <View style = {styles.infoTextContainer}>
                  <Text style = {styles.title}>
                    Reviews
                  </Text>
                  <ReviewDisplay ave_rating={data.ave_rating} rating_count={data.rating_count} activityID={id} refetch={refetch}/>
                  <ReviewList activityId={id}/>
                </View>

              </View>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActivitiesDetails;