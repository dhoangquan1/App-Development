import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './index.style'
import { Stack, useRouter } from "expo-router";
import { COLORS } from '../../../constants';


const explore = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter()

  const onPushCreate = () => {
    router.push('/create')
  }

  return (
    <View style={{flex : 1}} contentContainerStyle={{ flexGrow: 1 }}>
      
      <ScrollView style={{backgroundColor: COLORS.neutral}}>
        <View style={styles.topPadding}></View>
        <View style={styles.topBackground}>
          <View style={styles.topContainer}>
            <Text style={styles.bigText}>
              Share your experience
            </Text>
            <Text style={styles.smallText}>
              connect with the community
            </Text>

            <View style={styles.searchContainer}>
              <View style={styles.searchWrapper}>
                <TextInput
                  style={styles.searchInput}
                  value={searchTerm}
                  onChangeText={(text) => setSearchTerm(text)}
                  placeholder='Search...'
                />
              </View>
            </View>

            <View style={styles.createSection}>
              <Image 
                style={styles.pfpImage}
                resizeMode='cover'
                src={'https://t4.ftcdn.net/jpg/06/78/09/75/360_F_678097580_mgsNEISedI7fngOwIipYtEU0T6SN8qKv.jpg'}
              />
              <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createText}>
                  Create a new post
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.stomach}></View>
        </View>

        <View style={styles.bottomBackground}>
          <View style={styles.bottomContainer}>
            <Text style={styles.mainTitle}>
              <Text style={styles.firstTitle}>
                {'Latest '}
              </Text>
              <Text style={styles.secondTitle}>
                posts
              </Text>
            </Text>
          </View>
        </View>
        
      </ScrollView>
    </View>
  )
}

export default explore