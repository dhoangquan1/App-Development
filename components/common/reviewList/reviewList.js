import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./reviewList.style";
import { COLORS } from "../../../constants";
import { getActivityReviews } from "../../../services/getData";
import useSupabase from "../../../services/useSupabase";
import ReviewCard from "../cards/reviews/reviewCard";

const ReviewList = ({activityId}) => {
  const { data, isLoading, error } = useSupabase(() => getActivityReviews(`${activityId}`));

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
            <Text>Something went wrong</Text>
        ) : (
            data?.map((item) => (
                <ReviewCard
                    item={item}
                    key={`${item.activity_id},${item.user_id}`}
                />
            ))
        )}
      </View>
    </View>
  );
};

export default ReviewList;