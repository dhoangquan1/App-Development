import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: COLORS.tertiary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    width: '100%',
    ...SHADOWS.small,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '85%',
    height: '85%',
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  activityName: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FONT.bold,
    color: COLORS.primary,
    alignItems: "center",
    paddingVertical: 5,
  },
  button: {
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
      color: COLORS.neutral,
      fontFamily: FONT.flex,
      fontWeight: "200",
      fontSize: 16,
  },
});

export default styles;
