import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    topInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ratingDisplay: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    starText: {
        fontSize: 40,
        fontFamily: FONT.bold,
        color: COLORS.primary,
    },
    ratingCountText: {
        fontSize: 16,
        fontFamily: FONT.regular,
        color: COLORS.primary,
    },
    button: {
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: COLORS.secondary,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.small,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "350",
        fontFamily: FONT.medium,
        color: COLORS.neutral,
    }
});

export default styles;