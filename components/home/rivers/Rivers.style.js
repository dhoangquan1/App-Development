import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    borderRadius: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    ...SHADOWS.small,
  },
});

export default styles;
