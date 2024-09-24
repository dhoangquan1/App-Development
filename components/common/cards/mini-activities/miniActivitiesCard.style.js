import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES, getTabColors } from "../../../../constants";

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
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    marginRight: 20,
  },
  activityName: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FONT.bold,
    color: COLORS.primary,
    alignItems: "center",
    paddingVertical: 3,
  },
  detailsContainer: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  detailsText: {
    fontSize: 14,
    topPadding: 5,
    fontFamily: FONT.regular,
    color: COLORS.primary,
    alignItems: "center",
  },
  categoryContainer: (item) => ({
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: getTabColors(item),
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  }),
  categoryText: {
    color: COLORS.primary,
    fontFamily: FONT.flex,
    fontWeight: "200",
    fontSize: 14,
  },
});

export default styles;
