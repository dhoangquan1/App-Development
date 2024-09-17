import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutral,
    borderRadius: 15,
  },
  cardsContainer: {
    gap: SIZES.small,
    marginVertical: SIZES.small,
  },
});

export default styles;
