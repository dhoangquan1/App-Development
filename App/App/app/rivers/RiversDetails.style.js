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
        paddingBottom: 500,

    },
    backgroundRiver: {
        flex: 1,
        width: "100%",
        height: 300,
        top: 0
    },
    infoContainer: {
        borderRadius: 32,
        flex: 1,
        top: 250,
        width: "100%",
        backgroundColor: '#FFFFFF',
        position: 'absolute'
    },
    infoTextContainer: {
        paddingTop: 40,
        paddingRight: 40,
        paddingLeft: 40,
        flex: 1,
    },
    riverName: {
        fontSize: 36,
        fontFamily: FONT.flex,
        color: "#000",
        textAlign: "left",
        paddingBottom: 15
    },
    riverDescription: {
        fontSize: 20,
        fontFamily: FONT.regular,
        color: "#000",
        textAlign: "left",
    },
    activitiesTitle: {
        fontSize: 24,
        fontWeight: "700",
        fontFamily: FONT.flex,
        color: "#000",
        textAlign: "left",
        paddingBottom: 15,
    },
    activitiesFlexBox: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: 30,
        height: 44,
        width: "100%"
    },
    tab: (item) => ({
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.medium,
        backgroundColor: getTabColors(item)
    }),
    tabText: {
        color: "#000",
        fontFamily: FONT.flex,
        fontWeight: "200",
        fontSize: 20,
    },
});

export default styles;