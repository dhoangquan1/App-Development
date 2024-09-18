/**
 * @fileOverview This file contains styles for the Explore page component.
 * The styles are organized using React Native's StyleSheet for easy and efficient styling management.
 * It includes styles for layout, text, buttons, images, and other UI elements used in the Explore component.
 * 
 * @module (Tabs)/ExploreStyles
 */

import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const spacerHeight = 1000;

/**
 * Styles for the Explore page component.
 */
const styles = StyleSheet.create({
    topBackground: {
        flex: 1,
        backgroundColor: COLORS.secondary,
    },
    topPadding: {
        backgroundColor: '#00450B',
        height: spacerHeight,
        position: 'absolute',
        top: -spacerHeight,
        left: 0,
        right: 0,
    },
    topContainer: {
        padding: 25,
        rowGap: 5,
    },
    bigText: {
        fontSize: 30,
        fontWeight: "700",
        fontFamily: FONT.bold,
        color: '#fbfaf5',
    },
    smallText: {
        fontSize: 20,
        fontWeight: "300",
        fontFamily: FONT.light,
        color: '#fbfaf5',
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: SIZES.large,
        height: 50,

    },
    searchWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        height: "100%",
        borderWidth: 2,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.neutral,
        flexDirection: 'row',
        paddingHorizontal: 40,
    },
    searchInput: {
        fontFamily: FONT.regular,
        fontSize: 16,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,

    },
    searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: COLORS.primary,
    },
    searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: COLORS.white,
    },
    createSection: {
        marginTop: 10,
        width: '90%',
        gap: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: 'center'
    },
    pfpImage: {
        height: 65,
        width: 65,
        borderRadius: 65 / 2,
        overflow: 'hidden'
    },
    createButton: {
        borderRadius: 15,
        backgroundColor: '#539a5e',
        flex: 1,
        width: "100%",
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
    },
    createText: {
        fontSize: 20,
        fontWeight: "500",
        fontFamily: FONT.medium,
        color: '#fbfaf5',
        textAlign: "center",
    },
    stomach: {
        backgroundColor: '#FBFAF5',
        flex: 5,
        paddingVertical: 25,
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
    },
    bottomBackground: {
        backgroundColor: '#FBFAF5',
        paddingBottom: 30,
        flex: 1,
    },
    bottomContainer: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 25,
        rowGap: 5,
    },
    firstTitle: {
        color: '#539a5e'
    },
    secondTitle: {
        color: '#00450b'
    },
    mainTitle: {
        fontSize: 40,
        fontWeight: "700",
        fontFamily: FONT.bold,
        alignItems: "center",
    },
    shareYourExperience: {
        fontSize: 30,
        fontWeight: "700",
        color: "#f2ecdd",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        width: 380,
        height: 48
    },
    connectWithThe: {
        fontSize: 20,
        fontWeight: "300",
        color: "#f2ecdd",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        width: 380,
        height: 28
    },
    tabsContainer: {
        width: "100%",
        marginTop: SIZES.medium,
    },

});

export default styles;
