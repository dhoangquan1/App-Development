import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const getTabColors = (item) => {
  switch(item) {
      case 'Swimming':
          return '#C0EDFD'
      case 'Fishing':
          return '#79F3CC'
      case 'Paddling':
          return '#FF979E'
      case 'Boating and Sailing':
          return '#D6B7FF'
      case 'Hiking, Walk, & Run':
          return '#FECEFF'
      default:
          return '#C0EDFD'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: COLORS.tertiary,
  },
  imageContainer: {
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 1,
    height: 200
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  activityName: {
    fontSize: 20,
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
    paddingBottom: 3,
  },
  detailsText: {
    fontSize: 16,
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
