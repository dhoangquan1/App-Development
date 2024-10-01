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
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
  imageBackground: {
    backgroundColor: COLORS.neutral,
    width: 125 - SIZES.xSmall,
    height: 125 - SIZES.xSmall,
    borderRadius: (125 - SIZES.xSmall) / 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FONT.bold,
    color: COLORS.neutral,
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: FONT.flex,
    color: COLORS.tertiary,
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FONT.medium,
    textAlign: 'center',
    color: COLORS.neutral,
  }
  
});

export default styles;
