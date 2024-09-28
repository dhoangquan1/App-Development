import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, getTabColors } from "../../../constants";

const styles = StyleSheet.create({
    tabsContainer: {
        width: "100%",
        marginTop: 10,
    },
    focusedTabContainer: {
        padding: 4,
        borderWidth: 2,
        borderRadius: 10,
        marginRight: 5,
        borderColor: COLORS.primary,
    },
    unfocusedTabContainer: {
        padding: 6,
        marginRight: 5,
    },
    tab: (item, activeTab) => ({
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderRadius: 10,
        backgroundColor: getTabColors(item),
        gap: 5,
        flexDirection: "row",
        alignItems: "center",
        borderColor: activeTab === item ? COLORS.primary : COLORS.secondary,
        borderWidth: 2,
    }),
    tabText: (item, activeTab) => ({
        color: activeTab === item ? COLORS.primary : COLORS.secondary,
        fontFamily: FONT.flex,
        fontWeight: "200",
        fontSize: 16,
    }),
});

export default styles;  