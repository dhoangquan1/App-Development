import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  cardsContainer: {
    ...SHADOWS.small,
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
});

export default styles;
