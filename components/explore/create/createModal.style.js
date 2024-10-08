/**
 * @fileOverview This file contains styles for the Create component in the Explore page.
 * The styles are defined using React Native's StyleSheet for efficient styling management.
 * 
 * @module (Tabs)/Home/CreateModalStyles
 */

import {StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES, getTabColors } from "../../../constants";

/**
 * Style Sheet for the Create Component
 */

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
    createANew: {
        fontSize: 25,
        color: "#03310e",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 327,
        height: 30
    },
    formContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 15,
        backgroundColor: COLORS.tertiary,

    },
    formHeader: {
        fontSize: 20,
        fontWeight: "350",
        fontFamily: FONT.bold,
        color: COLORS.primary,
        marginVertical: 10,
    },
    imageContainer: {
        paddingHorizontal: 0,
        borderWidth: 1,
        backgroundColor: COLORS.neutral,
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
    },
    formPostName: {
        fontSize: 50,
        color: "#546021",
        textAlign: "left",
        display: "flex",
        width: "100%",
        height: 60,
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: COLORS.neutral,
        paddingHorizontal: 10,
    },
    formDescription: {
        ...SHADOWS.small,
        borderRadius: 15,
        borderColor: COLORS.primary,
        borderWidth: 1,
        backgroundColor: COLORS.neutral,
        width: "100%",
        height: 100,
        paddingHorizontal: 10,
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
    },
    checkBoxContainer: {
        marginBottom: 5,
        flexDirection: 'row', 
        alignItems: 'center',
        gap: 10,
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
    formStreet: {
        fontSize: 30,
        color: "#546021",
        textAlign: "left",
        display: "flex",
        width: "100%",
        height: 40,
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: COLORS.neutral,
        paddingHorizontal: 10,
    },
    formTown: {
        fontSize: 30,
        color: "#546021",
        textAlign: "left",
        display: "flex",
        width: "100%",
        height: 40,
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: COLORS.neutral,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    formZip: {
        fontSize: 30,
        color: "#546021",
        textAlign: "left",
        display: "flex",
        width: "100%",
        height: 40,
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: COLORS.neutral,
        paddingHorizontal: 10,
    },
    submitButton: {
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: COLORS.secondary,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.small,
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: "350",
        fontFamily: FONT.medium,
        color: COLORS.neutral,
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
    mapContainer: {
        flex: 1,
        width: '100%',
        height: 250,
        marginTop: 10,
        borderRadius: 15,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: COLORS.tertiary,
    },
    map: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    activityMarker: (item) => ({
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: COLORS.neutral,
        borderColor: getTabColors(item),
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }),
});

export default styles;