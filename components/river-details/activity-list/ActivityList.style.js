import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    //borderWidth: 2,
    //borderColor: COLORS.primary,
    marginTop: SIZES.medium,
    borderRadius: 15,
    paddingHorizontal: 10,

    height: 300,
  },
  cardsContainer: {
    ...SHADOWS.small,
    gap: SIZES.small,
    marginVertical: SIZES.small,
  },
});

export default styles;
