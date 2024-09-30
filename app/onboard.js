import { StyleSheet, SafeAreaView, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from "../constants/images"
import { router, Redirect } from "expo-router";
import { FONT, SHADOWS, COLORS } from '../constants';
import { useAuth } from '../context/AuthContext';

const OnBoard = () => {
    const {user} = useAuth();
    if(user !== null) return <Redirect href="/home" />;
    
  return (
    <View style={styles.container}>
        <ImageBackground
            source={images.OnBoardKayak}
            resizeMode='cover'
            style={styles.background}
        >
            <View style={styles.overlayContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.topTitleText}> Welcome to </Text>
                    <Text style={styles.title}>
                        Explore Your Rivers
                    </Text>
                    <View style={styles.logoContainer}>
                        <Image
                            source={images.logo}
                            resizeMode='contain'
                            style={styles.logo}
                        />
                    </View>
                    <Text style={styles.bottomTitleText}>Discover recreational opportunities around Massachusetts' waterways</Text>
                </View>


                <TouchableOpacity style={styles.button} onPress={() => router.push('/log-in')}>
                    <Text style={styles.buttonText}>Get started</Text>
                </TouchableOpacity>
                <Text style={styles.promotionText}>App made by Massachusetts Rivers Alliance</Text>

            </View>
        </ImageBackground>
    </View>
  )
}

export default OnBoard

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        width: '100%',
        height: '100%',
    },
    overlayContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.30)',
    },
    button: {
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: COLORS.secondary,
        height: 50,
        marginHorizontal: 25,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.small,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "350",
        fontFamily: FONT.bold,
        color: COLORS.neutral,
    },
    titleContainer: {
        flex: 1,
        top: 80,
        alignItems: 'center',
    },
    topTitleText: {
        fontSize: 24,
        fontWeight: "300",
        fontFamily: FONT.light,
        color: COLORS.neutral,
    },
    bottomTitleText: {
        fontSize: 20,
        fontWeight: "300",
        fontFamily: FONT.regular,
        color: COLORS.neutral,
        textAlign: 'center',
        textShadowColor: COLORS.primary,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        marginHorizontal: 25,
    },
    promotionText: {
        fontSize: 16,
        fontWeight: "150",
        fontFamily: FONT.light,
        color: COLORS.neutral,
        textAlign: 'center',
        textShadowColor: COLORS.primary,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        paddingBottom: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "900",
        fontFamily: FONT.bold,
        color: COLORS.tertiary,
        textShadowColor: COLORS.secondary,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        paddingBottom: 10,
    },
    logoContainer: {
        width: 120,
        height: 120,
        padding: 10,
        backgroundColor: COLORS.neutral,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: COLORS.tertiary,
        marginBottom: 10,
    },
    logo: {
        width: '100%',
        height: '100%'
    },
  });