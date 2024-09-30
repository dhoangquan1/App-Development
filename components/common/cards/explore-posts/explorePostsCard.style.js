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
    marginHorizontal: 10,
    borderRadius: 15,
    flex: 1,
    height: 200,
    overflow: 'hidden'
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
    fontSize: 18,
    fontWeight: "700",
    fontFamily: FONT.bold,
    color: COLORS.primary,
    alignItems: "center",
    marginBottom: 4,
  },
  mainDetailsContainer: {
    
  },
  detailsContainer: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
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
    marginBottom: 4,
  }),
  categoryText: {
    color: COLORS.primary,
    fontFamily: FONT.flex,
    fontWeight: "200",
    fontSize: 14,
  },
  userInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
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
  profileContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    fontFamily: FONT.regular,
    color: COLORS.primary,
  }
});

export default styles;
