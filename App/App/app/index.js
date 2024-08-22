import { StyleSheet, SafeAreaView, View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import images from "../constants/images"
import { router } from "expo-router";

const OnBoard = () => {
  return (
    <View style={styles.container}>
        <ImageBackground
            source={images.onboardCover}
            resizeMode='cover'
            style={styles.background}
        >
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcome}>
                    Welcome!
                </Text>
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => router.push('/log-in')}
            >
                <Text style={styles.getStartedText}>
                    Get started
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    </View>
  )
}

export default OnBoard

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    background: {
      width: '100%',
      height: '100%',
    },
    button: {
        flex: 1,
        height: 70,
        paddingHorizontal: 50,
        bottom: 100,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
        width: 4,
        height: 4
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        borderRadius: 30,
        backgroundColor: '#fff',
        position: "absolute",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    getStartedText: {
        fontSize: 32,
        lineHeight: 38,
        fontWeight: "900",
        fontFamily: "RobotoSerif-Black",
        color: '#294dab',
        textAlign: "center",
    },
    welcomeContainer: {
        flex: 1,
        top: 80,
    },
    welcome: {
        fontSize: 64,
        lineHeight: 75,
        fontWeight: "900",
        fontFamily: "RobotoSerif-Black",
        color: '#fff',
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {
        width: 0,
        height: 3
        },
        textShadowRadius: 25
    }
  });