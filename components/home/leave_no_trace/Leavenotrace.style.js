import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    ...SHADOWS.small,
    borderRadius: 15,
    backgroundColor: COLORS.secondary,
    flex: 1,
    width: "100%",
  },
  cardsContainer: {
    padding: SIZES.medium,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  learnMore: {
    fontSize: 16,
    fontFamily: FONT.medium,
    textAlign: 'center',
    color: COLORS.neutral,
  }
  
});

export default styles;
