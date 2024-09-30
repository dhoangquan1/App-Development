import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, getTabColors } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.neutral,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default styles;  