import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../constants";

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
    infoMainContainer: {
        flex: 1,
        width: "100%",
    },
    backgroundRiver: {
        flex: 1,
        width: "100%",
        height: 300,
        top: 0
    },
    stomach: {
        backgroundColor: COLORS.neutral,
        flex: 5,
        paddingVertical: 25,
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
        top: 250
        
    },
    infoContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: COLORS.neutral,
    },
    infoTextContainer: {
        paddingHorizontal: 20,
        flex: 1,
    },
    infoTopContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    category: (item) => ({
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
    categoryText: {
        color: COLORS.primary,
        fontFamily: FONT.flex,
        fontWeight: "200",
        fontSize: 16,
    },
    activityName: {
        fontSize: 28,
        fontFamily: FONT.bold,
        color: COLORS.primary,
        textAlign: "left",
    },
    activityDescription: {
        marginTop: 20,
        fontSize: 18,
        fontFamily: FONT.regular,
        color: COLORS.primary,
    },
    title: {
        marginTop: 25,
        fontSize: 24,
        fontWeight: "700",
        fontFamily: FONT.bold,
        color: COLORS.primary,
    },
    subTitle: {
        fontSize: 16,
        fontWeight: "350",
        fontFamily: FONT.light,
        color: COLORS.primary,
    },
    
});

export default styles;