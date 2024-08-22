import { ImageBackground, StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  riverImage: {
    height: 275,
    width: 250,
    flex: 1,
    alignContent: "space-between",
    borderRadius: SIZES.xSmall,
    overflow: 'hidden',
  },
  infoContainer: {
    height: 75,
    width: 230,
    bottom: 10,
    display: 'flex',
    position: 'absolute',
    backgroundColor: 'rgba(25, 79, 62, 0.8)',
    paddingLeft: 10,
    alignContent: "space-between",
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: SIZES.xSmall,
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
    color: COLORS.gray2,
  },
  riverName: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.white,
  },
  
});

export default styles;
