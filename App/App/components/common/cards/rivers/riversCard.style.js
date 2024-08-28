import { ImageBackground, StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  riverImage: {
    height: 350,
    width: 275,
    flex: 1,
    alignContent: "space-between",
    borderRadius: SIZES.xSmall,
    overflow: 'hidden',
  },
  infoContainer: {
    height: 75,
    width: 255,
    bottom: 10,
    display: 'flex',
    position: 'absolute',
    backgroundColor: 'rgba(	185, 196, 112, 0.8)',
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
