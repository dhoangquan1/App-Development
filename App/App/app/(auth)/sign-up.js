import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Dimensions, Alert } from 'react-native'
import React, { useState } from 'react'


import {images, FONT} from "../../constants"
import FormField from '../../components/common/form-field/FormField'
import { Link, router } from 'expo-router'
import { supabase } from '../../lib/supabase'

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    username: '',
  })

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

      Alert.alert("Success", "User have successfully created an account");
      router.replace('/log-in');

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
      </ImageBackground>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    widtht: '100%'
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
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 210,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
    width: 0,
    height: 4
    },
    textShadowRadius: 4,
    paddingBottom: 40,
  },
  logInContainer: {
    borderRadius: 30,
    width: 300,
    height: 450,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 25,
    shadowColor: 'rgba(67, 206, 162, 0.25)',
    shadowOffset: {
    width: 0,
    height: 4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  button: {
    borderRadius: 50,
    backgroundColor: '#000',
    paddingHorizontal: 50,
    height: 55,
    justifyContent: 'center',
    //calculation: middle of screen + half (height + half padding verticle) of parent box - half height of the child box
    position: 'absolute',
    top: (Dimensions.get('window').height)/2 + (450+20)/2 - 55/2
},
  buttonText: {
    fontSize: 15,
    fontWeight: "900",
    fontFamily: FONT.serifBlack,
    color: '#fff',
    textAlign: "center"
  },
  bottomContainer: {
    paddingTop: 40,
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