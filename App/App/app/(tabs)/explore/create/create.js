/**
 * @fileOverview This file defines the Create component for the Explore page.
 * It provides a form for users to create new posts within the community.
 * 
 * @module (Tabs)/Home/CreatePost
 */

import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Dimensions, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from '../create/create.style'
import FormField from '../../../../components/common/form-field/FormField'
import { supabase } from '../../../../lib/supabase'
import {images, FONT} from "../../../../constants"


/**
 * Create Component for creating new posts.
 * This component provides a form with fields that users can fill out to create a new post.
 * 
 * @component
 * @returns {JSX.Element} The rendered Create post page component.
 */
const create = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    id: '',
    river_id: '',
    created_at: '',
    activity: '',
    name: '',
    town: '',
    description: '',
    address: '',
    link: '',
    image: '',
    note: '',
    latitude: '',
    longitude: '',
    user_id: ''
  })
  
  const submit = async () => {
    if (form.name === "" || form.description === "") {
      Alert.alert("Error", "Please fill in all required fields");
    }

    setSubmitting(true);

    try {
      const { error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            name: form.name,
            username: form.username,
          }
        }
      })

      if(error){
        Alert.alert("Error", error.message);
      }
      
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  }

  // id: '',
  // river_id: '',
  // created_at: '',
  // activity: '',
  // name: '',
  // town: '',
  // description: '',
  // address: '',
  // link: '',
  // image: '',
  // note: '',
  // latitude: '',
  // longitude: '',
  // user_id: ''
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={images.onboardCover}
        resizeMethod='cover'
        style={styles.background}
      >
        <Text style={styles.title}>
          Create a New Post
        </Text>
        
        <>
          <View style={styles.logInContainer}>
            <FormField
              title="ID"
              value={form.id}
              handleChangeText={(e) => setForm({ ...form, id: e })}
            />
            <FormField
            title="River ID"
            value={form.river_id}
            handleChangeText={(e) => setForm({ ...form, river_id: e })}
            />
            <FormField
              title="Created At"
              value={form.created_at}
              handleChangeText={(e) => setForm({ ...form, created_at: e })}
            />
            <FormField
              title="Activity"
              value={form.activity}
              handleChangeText={(e) => setForm({ ...form, activity: e })}
            />
            <FormField
              title="Town"
              value={form.town}
              handleChangeText={(e) => setForm({ ...form, town: e })}
            />
            <FormField
              title="Description"
              value={form.description}
              handleChangeText={(e) => setForm({ ...form, description: e })}
            />
            <FormField
              title="Address"
              value={form.address}
              handleChangeText={(e) => setForm({ ...form, address: e })}
            />
            <FormField
              title="Link"
              value={form.link}
              handleChangeText={(e) => setForm({ ...form, link: e })}
            />
            <FormField
              title="Image"
              value={form.image}
              handleChangeText={(e) => setForm({ ...form, image: e })}
            />
            <FormField
              title="Note"
              value={form.note}
              handleChangeText={(e) => setForm({ ...form, note: e })}
            />
            <FormField
              title="Latitude"
              value={form.latitude}
              handleChangeText={(e) => setForm({ ...form, latitude: e })}
            />
            <FormField
              title="Longitude"
              value={form.longitude}
              handleChangeText={(e) => setForm({ ...form, longitude: e })}
            />
            <FormField
              title="User ID"
              value={form.user_id}
              handleChangeText={(e) => setForm({ ...form, user_id: e })}
            />
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={submit}>
            <Text style={styles.buttonText}>
              Create Post
            </Text>
          </TouchableOpacity>
        </>
      </ImageBackground>
    </View>
  )
}

export default create