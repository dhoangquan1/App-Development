import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    //borderWidth: 2,
    //borderColor: COLORS.primary,
    marginTop: SIZES.medium,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginVertical: 20,
    height: 300,
  },
  cardsContainer: {
    ...SHADOWS.small,
    gap: SIZES.small,
    marginVertical: SIZES.small,
  },
});

export default styles;
