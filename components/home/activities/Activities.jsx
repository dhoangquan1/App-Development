import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./Activities.style";
import { COLORS } from "../../../constants";
import ActivitiesCard from "../../common/cards/home-activities/activitiesCard";
import { getAllActivities } from "../../../services/getData";
import useSupabase from "../../../services/useSupabase";

const Activities = () => {
  const router = useRouter();
  const { data, isLoading, error } = useSupabase(getAllActivities);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find activities</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
    {/* Here below: this is where the activity cards are represented/coded */}
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
                handleNavigate={() => router.push(`/activities/${item.id}`)}
              />  
            ))
          )
        }
      </View>
    </View>
  );
};

export default Activities;