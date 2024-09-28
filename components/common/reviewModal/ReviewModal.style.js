import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
    darkenBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '20%',
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    modalView: {
        backgroundColor: COLORS.neutral,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 20,
        bottom: 0,
    },
    modalText: {
        fontSize: 20,
        fontWeight: "350",
        fontFamily: FONT.bold,
        color: COLORS.primary,
        marginVertical: 10,
        marginTop: 20,
    },
    customTextBox: {
        ...SHADOWS.small,
        borderRadius: 15,
        borderColor: COLORS.primary,
        borderWidth: 1,
        backgroundColor: COLORS.neutral,
        width: "100%",
        height: 100,
        paddingHorizontal: 10,
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
    },
    
});

export default styles;
