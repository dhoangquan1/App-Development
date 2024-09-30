/**
 * @fileOverview This is a component for the Explore page, which allows users to search for posts and create new posts.
 * @module (Tabs)/Explore
 */

import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './index.style'
import { Stack, useRouter } from "expo-router";
import { COLORS, images } from '../../../constants';
import PostsList from '../../../components/explore/postsList/postsList';

/**
 * Explore Component for viewing community posts and creating new posts
 * 
 * @component
 * @param {string} searchTerm - what the user is searching for
 * @param {function} setSearchTerm - sets the search term
 * @param {function} handleClick - handles click event for search
 * @returns {JSX.Element} the explore page
 */
const explore = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter()

  const onPushCreate = () => {
    router.push('/create')
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={images.logo}
          resizeMode='contain'
          style={styles.logo}
        />
        <Text style={styles.logoText}> Explore Your Rivers</Text>
      </View>
      <ScrollView style={{backgroundColor: COLORS.neutral}} showsVerticalScrollIndicator={false}>
        {/*<Text style={styles.pageSubTitle}>Share your experience with</Text>*/}
        <Text style={styles.pageTitle}>Community</Text>

        
        <TouchableOpacity style={styles.button} onPress={onPushCreate}>
          <Text style={styles.buttonText}>Create a new post</Text>
        </TouchableOpacity>
        <Text style={styles.tiptoolText}>Don't see an activity on here yet?</Text>
        
        <Text style={styles.title}>Latest posts</Text>
        <PostsList/>

        <View style={{paddingBottom: 75}}/>
      </ScrollView>
    </View>
  )
}

export default explore