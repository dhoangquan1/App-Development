import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import styles from "./Activities.style";
import { COLORS } from "../../../constants";
import ActivitiesCard from "../../common/cards/home-activities/activitiesCard";
import { getAllActivities } from "../../../services/getData";
import useSupabase from "../../../services/useSupabase";


const Post = () => {
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
  )
}
export default Post;
