import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

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
    backgroundColor: "#FFF",
  },
  imageContainer: {
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 1,
    height: 175
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  activityName: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
    color: '#000',
    alignItems: "center",
  },
  detailsContainer: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  detailsText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: '#000',
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
    color: "#000",
    fontFamily: "Roboto Flex",
    fontWeight: "200",
    fontSize: 14,
  },
});

export default styles;
