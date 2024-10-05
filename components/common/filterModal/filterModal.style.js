import { COLORS, SHADOWS, SIZES, FONT } from "../../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    darkenBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '10%',
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: "700",
        fontFamily: FONT.bold,
        color: COLORS.primary,
        marginTop: 20,
    },
    modalView: {
        backgroundColor: COLORS.neutral,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 20,
    },
    modalText: {
        fontSize: 20,
        fontWeight: "150",
        fontFamily: FONT.medium,
        color: COLORS.primary,
        paddingBottom: 10,
        
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
    filterContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 15,
        backgroundColor: COLORS.tertiary,

    },
    checkBoxContainer: {
        marginBottom: 5,
        flexDirection: 'row', 
        alignItems: 'center',
        gap: 10,
    },
    checkBox: {
        padding: 10,
        borderRadius: 4,
    },
    checkBoxText: {
        fontSize: 16,
        fontWeight: "150",
        fontFamily: FONT.regular,
        color: COLORS.primary,
    },
    radioButton: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRadioButton: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: COLORS.primary,
    },
    picker: {
        width: '100%',
        backgroundColor: COLORS.neutral,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: COLORS.secondary
    },
    pickerItem: {
        fontSize: 16,
        fontWeight: "150",
        fontFamily: FONT.regular,
        color: COLORS.primary,
    }
});

export default styles;