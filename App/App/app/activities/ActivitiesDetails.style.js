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
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        top: 275,
        
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
        flexDirection: 'row',
        
    },
    category: (item) => ({
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: getTabColors(item),
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
        gap: 2,
    }),
    categoryText: {
        color: COLORS.primary,
        fontFamily: FONT.flex,
        fontWeight: "200",
        fontSize: 14,
    },
    rating: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    aveRatingText: {
        fontSize: 18,
        fontFamily: FONT.bold,
        color: COLORS.primary,
    },
    reviewNumText: {
        fontSize: 18,
        fontFamily: FONT.regular,
        color: COLORS.primary,
    },
    address: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        gap: 5,
    },
    addressText: {
        fontSize: 16,
        fontFamily: FONT.regular,
        color: COLORS.primary,
    },
    activityName: {
        fontSize: 28,
        fontFamily: FONT.bold,
        color: COLORS.primary,
        marginBottom: 5,
    },
    activityDescription: {
        marginTop: 5,
        fontSize: 16,
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
    button: {
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: COLORS.secondary,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "350",
        fontFamily: FONT.medium,
        color: COLORS.neutral,
    }
    
});

export default styles;