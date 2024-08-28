import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    ...SHADOWS.small,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    flex: 1,
    width: "100%",
  },
  cardsContainer: {
    padding: SIZES.medium,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: FONT.bold,
    color: COLORS.neutral,
  },
  image: {
    flex: 1,
    width: 125 - SIZES.medium,
    height: 125 - SIZES.medium,
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: FONT.flex,
    color: COLORS.tertiary,
    width: 210
  },
  button: {
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: COLORS.secondary,
    width: 130,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  learnMore: {
    fontSize: 16,
    fontFamily: FONT.flex,
    textAlign: 'center',
    color: COLORS.neutral,
  }
  
});

export default styles;
