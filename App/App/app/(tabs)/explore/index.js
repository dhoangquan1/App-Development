/**
 * @fileOverview This is a component for the Explore page, which allows users to search for posts and create new posts.
 * @module (Tabs)/Explore
 */

import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Image, Alert, FlatList} from 'react-native'
import React, { useState } from 'react'
import styles from './index.style'
import { Stack, useRouter } from "expo-router";
import { useAuth } from '../../../context/AuthContext';
import { COLORS, icons, images, SIZES } from "../../../constants";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';

import CategoryButton from "../../../components/common/categoryButton/CategoryButton.js";
import { Posts } from "../../../components";


const categories = ["Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];


/**
 * Explore Component for viewing community posts and creating new posts
 * 
 * @component
 * @param {string} searchTerm - what the user is searching for
 * @param {function} setSearchTerm - sets the search term
 * @param {function} handleClick - handles click event for search
 * @returns {JSX.Element} the explore page
 */
const explore = ({ searchTerm, setSearchTerm }) => {
  const router = useRouter()
  const {user} = useAuth();

  const handleClick = () => {
    if (searchTerm) {
      router.push(`/search/${searchTerm}`)
    }
  }

  /**
   * Handles the click event for the create button
   * if the user is not logged in, it will prompt them to sign up
   * 
   * @returns {void}
   */
  const onPushCreate = () => {
    if(user) {
      router.push('/explore/create')
    }
    else {
      Alert.alert('Error', 'You must be logged in to create a post',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Sign Up', onPress: () => router.replace('/sign-up') },
        ]
      )
    }
  }
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.neutral }}>
        <ScrollView>
          <View style={styles.topPadding}></View>
          <View style={styles.topBackground}>
            <View style={styles.topContainer}>
            
{/* ________________________________________ Headers ________________________________________ */}
              <Text style={styles.shareYourExperience}>Share your experience</Text>
              
              <Text style={styles.connectWithThe}>connect with the community</Text>

{/* ________________________________________ Search Bar ________________________________________ */}
              <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                  <FontAwesome6 name="magnifying-glass" size={20} color={COLORS.primary} />

                  <TextInput
                    style={styles.searchInput}
                    value={searchTerm}
                    onChangeText={(text) => setSearchTerm(text)}
                    placeholder='Find your river adventure...'
                    placeholderTextColor={COLORS.secondary}
                    onSubmitEditing={handleClick}
                  />

                  <TouchableOpacity>
                    <Ionicons name="filter" size={25} color={COLORS.primary} />
                  </TouchableOpacity>
                </View>
              </View>
{/* ________________________________________ Categories List ________________________________________ */}
              <View style={styles.tabsContainer}>
                <FlatList
                  data={categories}
                  renderItem={({ item }) => (
                    <CategoryButton
                      item={item}
                      handlePress={handleClick}
                    />
                  )}
                  keyExtractor={(item) => item}
                  contentContainerStyle={{ columnGap: SIZES.small }}
                  horizontal
                />
              </View>

{/* ________________________________________ Posts ________________________________________ */}
              <View>
                <Text style={styles.recentPosts}>Recent Posts</Text>
              </View>

            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default explore