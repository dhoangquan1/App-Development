import {StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const spacerHeight = 1000;

const styles = StyleSheet.create({
    topBackground: {
        flex: 1,
        backgroundColor: '#00450B',
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
        fontFamily: "Roboto",
        color: '#fbfaf5',
    },
    smallText: {
        fontSize: 20,
        fontWeight: "300",
        fontFamily: "Roboto",
        color: '#fbfaf5',
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
        height: 50,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: '#fbfaf5',
        marginRight: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        height: "100%",
    },
    searchInput: {
        fontFamily: FONT.regular,
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
        borderRadius: 65/2,
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
        fontFamily: "Roboto",
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
        fontFamily: "Roboto",
        alignItems: "center",
    }
});

export default styles;
