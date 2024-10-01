import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES, getTabColors} from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: COLORS.tertiary,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 1,
    height: 200,
    
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  topDetailsContainer: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  activityName: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: FONT.bold,
    color: COLORS.primary,
    alignItems: "center",
    paddingVertical: 4,
  },
  mainDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
  },
  detailsContainer: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  detailsText: {
    fontSize: 16,
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
  rating: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  aveRatingText: {
    fontSize: 14,
    fontFamily: FONT.bold,
    color: COLORS.primary,
  },
  reviewNumText: {
    fontSize: 14,
    fontFamily: FONT.regular,
    color: COLORS.primary,
  },
  bookmarkButton: {
    top: 10,
    right: 10,
    alignSelf:'flex-end'
  }
});

export default styles;
