import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./Activities.style";
import { COLORS } from "../../../constants";
import ActivitiesCard from "../../common/cards/home-activities/activitiesCard";
import { getAllActivitiesByCategory_GeoSort } from "../../../services/getData";
import useSupabase from "../../../services/useSupabase";

const Activities = ({longitude, latitude, category}) => {
  const router = useRouter();
  const { data, isLoading, refetch, error } = useSupabase(() => getAllActivitiesByCategory_GeoSort(longitude, latitude, category));


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

      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
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