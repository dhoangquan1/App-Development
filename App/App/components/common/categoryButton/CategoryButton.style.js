import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const getTabColors = (item) => {
    switch(item) {
        case 'Swimming':
            return '#C0EDFD'
        case 'Fishing':
            return '#79F3CC'
        case 'Paddling':
            return '#FF979E'
        case 'Boating and Sailing':
            return '#D6B7FF'
        case 'Hiking, Walk, & Run':
            return '#FECEFF'
        default:
            return '#C0EDFD'
    }
}

const styles = StyleSheet.create({
    
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
    }),
    tabText: {
        color: COLORS.primary,
        fontFamily: FONT.flex,
        fontWeight: "200",
        fontSize: 16,
    },
});

export default styles;