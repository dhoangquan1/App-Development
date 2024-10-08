/**
 * @fileOverview This file contains styles for the Bookmark page component.
 * The styles are organized using React Native's StyleSheet for easy and efficient styling management.
 * It includes styles for layout, text, buttons, images, and other UI elements used in the Bookmark component.
 * 
 * @module (Tabs)/ExploreStyles
 */

import {StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const spacerHeight = 1000;

/**
 * Styles for the Bookmark page component.
 */
const styles = StyleSheet.create({
    topBackground: {
        flex: 1,
        backgroundColor: '#FBFAF5',
        marginTop: 70,
    },
    topContainer: {
        paddingHorizontal: 16,
        paddingTop: 25,
        rowGap: 5,
    },
    bigText: {
        fontSize: 30,
        fontWeight: "700",
        fontFamily: FONT.bold,
        color: '#03310E', // Dark green
    },
    smallText: {
        fontSize: 20,
        fontWeight: "300",
        fontFamily: FONT.light,
        color: '#fbfaf5',
    },

    //Activity Cards:
    container: {
        marginTop: SIZES.xLarge,
      },
      header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: SIZES.small,
      },
      headerTitle: {
        fontSize: 24,
        fontFamily: FONT.medium,
        color: COLORS.primary,
      },
      headerBtn: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
        color: COLORS.secondary,
      },
      cardsContainer: {
        ...SHADOWS.small,
        marginTop: SIZES.medium,
        gap: SIZES.small,
        paddingHorizontal: 20,
      },
      logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 5,
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
    //   categoryContainer: {
    //     paddingVertical: 2,
    //     paddingHorizontal: 10,
    //     borderRadius: 10,
    //     //backgroundColor: getTabColors(item),
    //     gap: 5,
    //     flexDirection: "row",
    //     alignItems: "center",
    //   },
});

export default styles;
