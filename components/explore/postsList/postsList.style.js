import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  cardsContainer: {
    ...SHADOWS.small,
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
  loadingContainer: {
    height: 300,
    width: '100%',
    backgroundColor: COLORS.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  }
});

export default styles;
