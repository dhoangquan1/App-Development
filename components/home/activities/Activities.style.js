import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
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
