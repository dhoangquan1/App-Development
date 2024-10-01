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
    cancelButton: {
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: COLORS.neutral,
        borderWidth: 2,
        borderColor: COLORS.secondary,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.small,
        marginBottom: 100,
    },
    cancelButtonText: {
        fontSize: 16,
        fontWeight: "350",
        fontFamily: FONT.medium,
        color: COLORS.secondary,
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
    imageContainer: {
        paddingHorizontal: 0,
        borderWidth: 1,
        borderColor: COLORS.primary,
        height: 200,
        borderRadius: 15,
        overflow: 'hidden',
    },
    uploadButton: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
    }
    
});

export default styles;
