import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Dimensions, Alert } from 'react-native'
import React, { useState } from 'react'


import {images, FONT, SHADOWS, COLORS} from "../../constants"
import FormField from '../../components/common/form-field/FormField'
import { Link } from 'expo-router'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../context/AuthContext'
import { useRouter } from 'expo-router'

const LogIn = () => {
  const router = useRouter()
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const signInGuest = () => {
    router.replace('/home');
  }
  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
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
    <View style={styles.container}>
      <ImageBackground 
        source={images.authBG}
        resizeMethod='cover'
        style={styles.background}
      >
        <Text style={styles.title}>
          Log in
        </Text>

        <TouchableOpacity 
            style={styles.button}
            onPress={signInGuest}>
            <Text style={styles.buttonText}>
              Continue as Guest
            </Text>
          </TouchableOpacity>
        
        <>
          <View style={styles.logInContainer}>
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
              Log in
            </Text>
          </TouchableOpacity>
        </>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>
            Don't have an account?
          </Text>
          <Link
            href="/sign-up"
            style={styles.bottomLink}
          >
            Sign up
          </Link>

        </View>
      </ImageBackground>
    </View>
  )
}

export default LogIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: "900",
    fontFamily: FONT.serifBlack,
    color: '#fff',
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
    height: 300,
    backgroundColor: COLORS.neutral,
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 25,
    marginBottom: 20,
    ...SHADOWS.small,
  },
  button: {
    borderRadius: 50,
    backgroundColor: '#000',
    paddingHorizontal: 50,
    height: 55,
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "900",
    fontFamily: FONT.serifBlack,
    color: '#fff',
    textAlign: "center"
  },
  bottomContainer: {
    alignItems: 'center',
    gap: 4,
  },
  bottomText: {
    fontSize: 15,
    fontWeight: "700",
    fontFamily: FONT.bold,
    color: '#000',
  },
  bottomLink: {
    fontSize: 15,
    fontWeight: "700",
    fontFamily: FONT.bold,
    color: '#5c99af',
  }
});