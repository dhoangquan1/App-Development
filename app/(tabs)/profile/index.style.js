/**
 * @fileOverview This file contains styles for the Profile page component.
 * The styles are organized using React Native's StyleSheet for easy and efficient styling management.
 * It includes styles for layout, text, buttons, images, and other UI elements used in the Profile component.
 * 
 */

import {StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const spacerHeight = 1000;

/**
 * Styles for the Explore page component.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.neutral,
    },
    button: {
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: COLORS.secondary,
        height: 50,
        paddingHorizontal: 50,
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
    userInfoContainer: {
        alignItems: 'center',
        gap: 5,
        padding: 16,
    },
    title: {
        color: COLORS.primary,
        fontFamily: FONT.bold,
        fontWeight: "700",
        fontSize: 30,
    },
    userImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    userName: {
        color: COLORS.primary,
        fontFamily: FONT.bold,
        fontWeight: "200",
        fontSize: 24,
    },
    userUsername: {
        color: COLORS.primary,
        fontFamily: FONT.light,
        fontWeight: "200",
        fontSize: 18,
    },
    contentContainer: {
        marginTop: 25
    },
    contentTitle: {
        fontSize: 24,
        fontFamily: FONT.medium,
        color: COLORS.primary,
        padding: 16,
    },
});

export default styles;
