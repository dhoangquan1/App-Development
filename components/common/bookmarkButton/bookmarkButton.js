import { View, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './bookmarkButton.style'
import { COLORS } from '../../../constants';
import useSupabase from '../../../services/useSupabase';
import { useAuth } from '../../../context/AuthContext';
import { deleteBookmark } from '../../../services/deleteData';
import { uploadBookmark } from '../../../services/uploadData';

const BookmarkButton = ({isBookmarked, setIsBookmarked, activityID}) => {
    //true if is bookedmarked, else false
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const {user} = useAuth()

    const submit = async () => {
        if(!user) {
            Alert.alert('Error', 'You must be logged in to bookmark',
                [{ text: 'Cancel', style: 'cancel' },
                { text: 'Sign Up', onPress: () => router.replace('/sign-up') },]
            )
        }else{
            try {
                setIsLoading(true)
                if(isBookmarked){
                    const res = await deleteBookmark(user.id, activityID)
                    if(res.success){
                        setIsBookmarked(false)
                    }
                }else{
                    const res = await uploadBookmark(user.id, activityID)
                    if(res.success){
                        setIsBookmarked(true)
                    }

                }
            } catch (error) {
                Alert.alert('Error', error.msg)
            } finally {
                setIsLoading(false)
            }
        }
    }

  return (
    <TouchableOpacity style={styles.container} disabled={isLoading} onPress={submit}>
        {isLoading ? (
          <ActivityIndicator size='small' color={COLORS.secondary} />
        ) : (
            isBookmarked ? (
                <Ionicons name="bookmark" size={26} color={COLORS.secondary} />
            ) : (
                <Ionicons name="bookmark-outline" size={26} color={COLORS.secondary} />
            )
        )}
    </TouchableOpacity>
  )
}

export default BookmarkButton