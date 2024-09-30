import React, {useEffect, useState} from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import { COLORS } from "../../../constants";
import styles from "./postsList.style";

import useSupabase from "../../../services/useSupabase";
import { useAuth } from "../../../context/AuthContext";
import { getAllUserContents } from "../../../services/getData";

import ExplorePostsCard from "../../common/cards/explore-posts/explorePostsCard";
import ExploreReviewsCard from "../../common/cards/explore-reviews/exploreReviewsCard"

const PostsList = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { data, isLoading, refetch, error } = useSupabase(() => getAllUserContents());


  const handlePostNavigate = (item) => {
    router.push({
      pathname: `/posts/[id]`,
      params: {id : item.id}
    });
  };

  const handleActivityNavigate = (item) => {
    router.push({
      pathname: `/activities/[id]`,
      params: {id : item.id}
    });
  };

  return (
    <View style={styles.container}>
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
              item.type === 'post' ? (
                <ExplorePostsCard
                    item={item}
                    key={`${item.id}+${item.user_id}`}
                    handleNavigate={handlePostNavigate}
                />
              ) : (
                <ExploreReviewsCard
                    item={item}
                    key={`${item.id}+${item.user_id}`}
                    handleNavigate={handleActivityNavigate}
                />
              )
            ))
          )
        }
      </View>
    </View>
  );
};

export default PostsList;