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
  TouchableOpacity
} from "react-native";

import {
  ScreenHeaderBtn,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import styles from "./RiversDetails.style.js";
import { getRiver } from "../../services/getData.js";
import useSupabase from "../../services/useSupabase.js";
import CategoryButton from "../../components/common/categoryButton/CategoryButton.js";
import ActivityList from "../../components/river-details/activity-list/ActivityList.js";

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

  const onPressCategory = (item) => {
    setActiveTab(item)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.neutral }}>
      <Stack.Screen
        options={{
          headerTransparent: false,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
          ),
          headerTitle: "",
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

              <View style = {styles.infoTextContainer}>
                <Text style = {styles.riverName}> 
                  {data.name} 
                </Text>
                <Text style = {styles.riverDescription}>
                  The Ipswich River supplies the municipal water for Boxford, Wilmington, Ipswich, Lynnfield, Middleton, Danvers, Topsfield, Beverly, Salem, Lynn, Peabody, Hamilton, and Wenham. Additionally, all communities within the watershed have private wells that draw from the river's aquifer. 
                </Text>
              </View>

              <View style = {styles.infoTextContainer}>
                <Text style = {styles.title}>
                  Activities
                </Text>
                <View style={styles.tabsContainer}>
                  <FlatList
                    data={categories}
                    renderItem={({ item }) => (
                      <CategoryButton 
                        item = {item}
                        handlePress = {onPressCategory}
                      />
                    )}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                  />
                </View>
                <ActivityList key={activeTab} category={activeTab} riverID={id}/>
              </View>

              <View style = {styles.infoTextContainer}> 
                <Text style = {styles.title}>
                  Organizations
                </Text>
                <Text style = {styles.subTitle}>
                  Check out what the organizations been up to!
                </Text>
              </View>
            </View>
            
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RiverDetails;