import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: COLORS.tertiary,
    width: '100%',
    padding: 15
  },
  topInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  userNameText: {
    fontSize: 18,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    marginBottom: 2,
  },
  dateText: {
    fontSize: 14,
    fontFamily: FONT.light,
    color: COLORS.primary,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  
  descriptionContainer: {
    marginTop: 10,
  },
  titleText: {
    fontSize: 18,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: FONT.regular,
    color: COLORS.primary,
  },
  reviewImage: {
    marginTop: 10,
    height: 200,
    width: '100%',
    borderRadius: 15,
  }
});

export default styles;
