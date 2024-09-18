import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, getTabColors } from "../../../constants";

const styles = StyleSheet.create({
    tabsContainer: {
        width: "100%",
        marginTop: SIZES.medium,
    },
    tab: (item) => ({
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderRadius: 10,
        backgroundColor: getTabColors(item),
        gap: 5,
        flexDirection: "row",
        alignItems: "center",
        borderColor: COLORS.primary,
        borderWidth: 2,
        marginRight: 5,
    }),
    tabText: {
        color: COLORS.primary,
        fontFamily: FONT.flex,
        fontWeight: "200",
        fontSize: 16,
    },
});

export default styles;  