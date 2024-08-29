import { View, Text, Alert, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { supabase } from '../../lib/supabase';
import { SafeAreaView } from 'react-native-safe-area-context';

// TODO: Document notification component

/**
 * Notification Component for displaying user notifications
 * @returns {JSX.Element} The notification page.
 */
const notification = () => {
  
  const onLogOut = async () => {
    const {error} = supabase.auth.signOut();
    if(error){
      Alert.alert("Sign out", error.message);
    }

  }

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onLogOut}>
        <Text> LOG OUT </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default notification