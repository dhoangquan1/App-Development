import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.neutral,
    marginTop: 0,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: COLORS.secondary,
    height: 50,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
    marginBottom: 16,
    },
   buttonText: {
    fontSize: 16,
    fontWeight: "350",
    fontFamily: FONT.medium,
    color: COLORS.neutral,
   },
   infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
   },
   description: {
    fontSize: 16,
    fontFamily: FONT.regular,
    color: COLORS.primary,
   },
   image: {
    height: 150,
    width: 150,
   }, 
   credits: {
    fontSize: 14,
    fontFamily: FONT.light,
    color: COLORS.primary,
    marginBottom: 16,
   }
});

export default styles;
