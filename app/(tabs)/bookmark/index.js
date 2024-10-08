/**
 * @fileOverview This is a component for the Bookmark page, which displays a user's bookmarked posts / activities.
 * @module (Tabs)/Bookmark
 */

import { View, Text, ScrollView, ActivityIndicator, RefreshControl, Alert} from 'react-native'
import React, {useCallback, useState, useEffect} from 'react'

import { Stack, useRouter } from "expo-router";
import styles from './index.style'

//First Attempt:
//import ActivitiesCard from "../../components/common/cards/home-activities/activitiesCard";
//import useSupabase from "../../../services/useSupabase";

//Second Attempt:
import { COLORS } from "../../../constants";
import ActivitiesCard from "../../../components/common/cards/home-activities/activitiesCard";
import { getAllActivities, getBookmark, getUserContents } from "../../../services/getData";
import useSupabase from "../../../services/useSupabase";
import { useAuth } from '../../../context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';

//Directory ../ based test
// import {
//   Activities,
// } from "../../../components";

/**
 * Bookmark Component for saving activities and rivers
 * @returns {JSX.Element} bookmark page
 * @param {function} handleClick - handles click event for Bookmark icon button
 */
 //original code:
const bookmark = () => {
  const router = useRouter();
  const {user, userLocation} = useAuth();
  if(!user) {
    Alert.alert('Error', 'You must be logged in to bookmark',
        [{ text: 'Cancel', style: 'cancel', onPress: () => router.replace('/home') },
        { text: 'Sign Up', onPress: () => router.replace('/sign-up') },]
    )
    return;
  }
  const [refreshing, setRefreshing] = useState(false);
  const { data, isLoading, refetch, error } = useSupabase(() => getBookmark(user.id, userLocation.latitude, userLocation.longitude));

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch()
    setRefreshing(false)
  }, []);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );

  return (
    
      <View style={{flex : 1, marginTop: 20}} contentContainerStyle={{ flexGrow: 1 }}>
        <ScrollView style={{backgroundColor: COLORS.neutral}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {/* #FBFAF5 is tan color */}
          
          <View>
            {/* <View style={styles.topPadding}></View> 
            // This makes the Top Padding that appears when you scroll beyond what you're suppposed to: -> as dark green*/ }
              {/* <View style={styles.topBackground}> // This makes the background dark green*/}
                <View style={styles.topContainer}>
                  <Text style={styles.bigText}>
                      Bookmark
                  </Text>
                </View>
              {/* </View>     */}

              {/* Activities Cards to stand in for Saved Activities */}
                  <View style={styles.cardsContainer}>
                    {
                      isLoading ? (
                        <ActivityIndicator size='large' color={COLORS.primary} />
                      ) : error ? (
                        <Text>Something went wrong</Text>
                      ) : (
                        user && data?.map((item) => (
                          <ActivitiesCard
                            item={item}
                            key={`${item.id}`}
                            handleNavigate={() => router.push(`/activities/${item.id}`)}
                          />  
                        ))
                      )
                    }
              </View>
              {/* Activities Cards to stand in for Saved Activities */}
              {/* <Activities /> // Activities Test */}
          </View>
          <View style={{paddingBottom: 75}}/>
        </ScrollView>
      </View>
    
  )
}
export default bookmark
  

//code from ChatGPT:
/*import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './bookmark.style'; // Import your style file

const bookmark = ({ navigation, route }) => {
  // Assuming the posts come from somewhere, you might get them from a parent component or a global state.
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  //const [bookmarkedPosts, setBookmarkedPosts] = useState(route.params?.bookmarkedPosts || []);

  const removeBookmark = (postId) => {
    setBookmarkedPosts((prevBookmarks) => prevBookmarks.filter(post => post.id !== postId));
  };

  const renderBookmark = ({ item }) => (
    <View style={styles.bookmarkItem}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <TouchableOpacity
        style={styles.bookmarkIcon}
        onPress={() => removeBookmark(item.id)}
      >
        <Text style={styles.removeIcon}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bookmarked Posts</Text>
      {bookmarkedPosts.length === 0 ? (
        <Text style={styles.noBookmarksText}>No bookmarks yet.</Text>
      ) : (
        <FlatList
          data={bookmarkedPosts}
          renderItem={renderBookmark}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default bookmark;
*/