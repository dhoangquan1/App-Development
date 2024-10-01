import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 7,
    },
    title: {
        fontSize: 15,
        fontWeight: "700",
        fontFamily: FONT.bold,
        color: COLORS.primary,
    },
    textBox: {
        ...SHADOWS.small,
        borderRadius: 15,
        borderColor: COLORS.primary,
        borderWidth: 1,
        backgroundColor: COLORS.neutral,
        width: "100%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    textInput: {
        fontSize: 15,
        fontFamily: FONT.regular,
        color: '#000',
        flex: 1,
    },
    
  });

  export default styles