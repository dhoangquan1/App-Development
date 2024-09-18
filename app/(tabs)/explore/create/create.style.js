/**
 * @fileOverview This file contains styles for the Create component in the Explore page.
 * The styles are defined using React Native's StyleSheet for efficient styling management.
 * 
 * @module (Tabs)/Home/CreatePostStyles
 */

import {StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

/**
 * Style Sheet for the Create Component
 */

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FBFAF5',
        flex: 1,
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
});

export default styles;
