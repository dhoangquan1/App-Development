/**
 * @fileOverview This is a component for the Sign Up page, which allows users to create an account.
 * @module (Auth)/SignUp
 */

import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {images, FONT, COLORS, SHADOWS} from "../../constants"
import FormField from '../../components/common/form-field/FormField'
import { Link, router } from 'expo-router'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../context/AuthContext'

/**
 * SignUp Component allows users to create an account.
 * @returns {JSX.Element} The sign up page.
 */
const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    username: '',
  })

  /**
   * Handles sign up form submission
   * @returns {Promise<void>} The result of the sign up form submission
   */
  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <Image 
          source = {images.logo}
          resizeMode='contain'
          style={styles.image}
        />
        <Text style={styles.title}>
          Sign up
        </Text>
        
        <>
          <View style={styles.logInContainer}>
            <FormField
              title="Name"
              value={form.name}
              handleChangeText={(e) => setForm({ ...form, name: e })}
            />
            <FormField
              title="Username"
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
            />
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              keyboardType="email-address"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
            />
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={submit}>
            <Text style={styles.buttonText}>
              Create Account
            </Text>
          </TouchableOpacity>
        </>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>
            Already have an account?
          </Text>
          <Link
            href="/log-in"
            style={styles.bottomLink}
          >
            Log in
          </Link>

        </View>
      </View>
    </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutral,
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 40,
    marginBottom: 10,
    height: 75,
    width: 75,
  },
  imageText:{
    fontSize: 24,
    fontWeight: "350",
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  imageSubtext:{
    fontSize: 18,
    fontWeight: "350",
    fontFamily: FONT.regular,
    color: COLORS.primary,
  },
  title: {
    fontSize: 40,
    fontWeight: "900",
    fontFamily: FONT.bold,
    color: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
    width: 0,
    height: 4
    },
    textShadowRadius: 4,
    marginBottom: 20,
  },
  logInContainer: {
    borderRadius: 30,
    width: 300,
    height: 400,
    backgroundColor: COLORS.tertiary,
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 20,
    ...SHADOWS.small,
  },
  button: {
    marginBottom: 20,
    borderRadius: 15,
    paddingHorizontal: 50,
    backgroundColor: COLORS.secondary,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  buttonText: {
      fontSize: 16,
      fontWeight: "350",
      fontFamily: FONT.medium,
      color: COLORS.neutral,
  },
  bottomContainer: {
    alignItems: 'center',
    gap: 4,
  },
  bottomText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FONT.bold,
    color: COLORS.primary,
  },
  bottomLink: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FONT.bold,
    color: '#5c99af',
  }
});