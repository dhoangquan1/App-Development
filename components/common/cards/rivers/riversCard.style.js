import { ImageBackground, StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  riverImage: {
    height: 325,
    width: 275,
    flex: 1,
    alignContent: "space-between",
    borderRadius: 15,
    overflow: 'hidden',
  },
  infoContainer: {
    height: 75,
    width: '100%',
    bottom: 0,
    display: 'flex',
    position: 'absolute',
    backgroundColor: COLORS.tertiary,
    paddingLeft: 10,
    alignContent: "space-between",
    justifyContent: 'center',
    borderRadius: 15,
  },
  addressContainer: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  riverAddress: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.primary,
  },
  riverName: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    paddingTop: 3,
  },
  
});

export default styles;
