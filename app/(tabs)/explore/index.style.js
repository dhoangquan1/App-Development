/**
 * @fileOverview This file contains styles for the Explore page component.
 * The styles are organized using React Native's StyleSheet for easy and efficient styling management.
 * It includes styles for layout, text, buttons, images, and other UI elements used in the Explore component.
 * 
 * @module (Tabs)/ExploreStyles
 */

import {StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

/**
 * Styles for the Explore page component.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.neutral,
        paddingTop: 20,
    },
    padContainer: {
        flex: 1,
        paddingHorizontal: 16  
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 5,
        alignSelf: 'center'
    },
    logoText: {
        color: COLORS.primary,
        fontFamily: FONT.bold,
        fontWeight: "200",
        fontSize: 18,
    },
    logo: {
        height: 30,
        width: 30,
    },
    pageSubTitle: {
        paddingTop: 20,
        fontSize: 20,
        fontWeight: "300",
        fontFamily: FONT.light,
        color: COLORS.primary,
    },
    pageTitle: {
        paddingTop: 15,
        fontSize: 30,
        fontWeight: "700",
        fontFamily: FONT.bold,
        color: COLORS.primary,
        marginBottom: 15,
    },
    tiptoolText: {
        fontSize: 16,
        fontWeight: "350",
        fontFamily: FONT.light,
        color: COLORS.secondary,
        marginHorizontal: 25,
        textAlign: 'center',
        paddingBottom: 15,
    },
    button: {
        marginBottom: 5,
        borderRadius: 15,
        backgroundColor: COLORS.secondary,
        height: 50,
        width: '100%',
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
    title: {
        fontSize: 24,
        fontFamily: FONT.medium,
        color: COLORS.primary,
    }
    
});

export default styles;
