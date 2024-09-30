import React, {useEffect, useState} from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./Activities.style";
import { COLORS } from "../../../constants";
import ActivitiesCard from "../../common/cards/home-activities/activitiesCard";
import { getAllActivities } from "../../../services/getData";
import useSupabase from "../../../services/useSupabase";
import { useAuth } from "../../../context/AuthContext";
import CategoryList from "../../common/categoryList/categoryList";

const categories = ["Nearby", "Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];

const Activities = ({longitude, latitude}) => {
  const router = useRouter();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState(categories[0]);
  const { data, isLoading, refetch, error } = useSupabase(() => getAllActivities(longitude, latitude, activeTab, user?.id));

  useEffect(() => {
    refetch()
  }, [activeTab])

  const handleNavigate = (item) => {
    router.push({
      pathname: `/activities/[id]`,
      params: {id : item.id}
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find activities</Text>
        {/*<TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>*/}
      </View>

      <CategoryList categories={categories} setActiveTab={setActiveTab} activeTab={activeTab}/>
      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <>
              <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' color={COLORS.primary} />
              </View>
              <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' color={COLORS.primary} />
              </View>
            </>
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            data?.map((item) => (
              <ActivitiesCard
                item={item}
                key={`${item.id}`}
                handleNavigate={handleNavigate}
              />  
            ))
          )
        }
      </View>
    </View>
  );
};

export default Activities;