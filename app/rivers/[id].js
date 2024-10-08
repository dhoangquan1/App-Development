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
  Image
} from "react-native";

import {
  CategoryList,
  ScreenHeaderBtn,
} from "../../components";
import { COLORS, icons, SIZES, images } from "../../constants";
import styles from "./RiversDetails.style.js";
import { getRiver } from "../../services/getData.js";
import useSupabase from "../../services/useSupabase.js";
import ActivityList from "../../components/river-details/activity-list/ActivityList.js";
import OrganizationList from "../../components/river-details/organization-list/OrganizationList.js";

const categories = ["Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];

const RiverDetails = () => {
  const {id} = useLocalSearchParams();
  const router = useRouter();

  const { data, refetch, error } = useSupabase(() => getRiver(`${id}`));
  const [activeTab, setActiveTab] = useState(categories[0]);
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
          headerTransparent: false,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerStyle: {
            top: 0,
            backgroundColor: COLORS.neutral
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
        refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <ImageBackground
          source = {{uri: (data.image)}}
          resizeMode= 'cover'
          style = {styles.backgroundRiver}
        >
          <View style={styles.stomach}/>
        </ImageBackground>
        <View style = {styles.infoMainContainer}> 
            <View style = {styles.infoContainer}>

              {/* General description Section */}
              <View style = {styles.infoTextContainer}>
                <Text style = {styles.riverName}> 
                  {data.name} 
                </Text>
                <Text style = {styles.riverDescription}>
                  {data.description}
                </Text>
              </View>

              {/* Activities Section */}
              <View style = {styles.infoTextContainer}>
                <Text style = {styles.title}>
                  Activities
                </Text>
                <CategoryList categories={categories} setActiveTab={setActiveTab} activeTab={activeTab}/>
                <ActivityList key={activeTab} category={activeTab} riverID={id}/>
              </View>

              {/* Organization Section */}
              <View style = {styles.infoTextContainer}> 
                <Text style = {styles.title}>
                  Local organizations
                </Text>
                <Text style = {styles.subTitle}>
                  Check out what the organizations been up to!
                </Text>
                <OrganizationList riverID={id}/>
              </View>

              {/* Environmental concern Section */}
              <View style = {styles.infoTextContainer}>
                <Text style = {styles.title}> 
                  Environmental concerns
                </Text>
                <View style={styles.issue}>
                  <Text style = {styles.issueText}>
                    {data.issue}
                  </Text>
                </View>
              </View>

              <View style={{paddingBottom: 75}}/>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RiverDetails;