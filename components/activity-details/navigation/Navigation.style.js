import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...SHADOWS.small,
    },
    mapContainer: {
      flex: 1,
      width: '100%',
      height: 250,
      marginTop: 10,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      overflow: 'hidden'
    },
    map: {
      width: '100%',
      height: '100%',
      flex: 1,
    },
    button: {
        backgroundColor: COLORS.tertiary,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: "450",
        fontFamily: FONT.medium,
        color: COLORS.primary,
    }
  });

export default styles;