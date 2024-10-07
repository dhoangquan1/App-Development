import { View, Text, Alert, Touchable, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { supabase } from '../../../lib/supabase';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../../context/AuthContext';
import styles from './index.style';
import { icons, images } from '../../../constants';
import UserPostsList from '../../../components/profile/userPostsList/userPostsList';

const Profile = () => {
  const {user} = useAuth();

  const onLogOut = async () => {
    const {error} = supabase.auth.signOut();
    if(error){
      Alert.alert("Sign out", error.message);
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      {/*Logo and app name */}
      <View style={styles.logoContainer}>
        <Image
          source={images.logo}
          resizeMode='contain'
          style={styles.logo}
        />
        <Text style={styles.logoText}> Explore Your Rivers</Text>
      </View>

      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>

        {/*Users general information */}
        <View style={styles.userInfoContainer}>
          <Image
            src={user ? user.image : 'https://dguiuptoqiznizwumnnd.supabase.co/storage/v1/object/public/images/avatars/default.jpg'}
            resizeMode='cover'
            style={styles.userImage}
          />
          <Text style={styles.userName}>{user ? user.name : 'Guest'}</Text>
          {user && <Text style={styles.userUsername}>@{user.username}</Text>}

          <TouchableOpacity style={styles.button} onPress={onLogOut}>
            <Text style={styles.buttonText}>{user ? 'Log out' : 'Log in'}</Text>
          </TouchableOpacity>
        </View>

        {/*Users posts and reviews */}
        <View style={styles.contentContainer}>
          <Text style={styles.contentTitle}>Your recent posts and reviews</Text>
          {user && <UserPostsList/>}
        </View>
        <View style={{paddingBottom: 75}}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile