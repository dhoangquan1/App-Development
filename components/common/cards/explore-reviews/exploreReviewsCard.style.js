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
    overflow: 'hidden',
    marginTop: 10,
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
  topInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
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
  },
  miniContainer: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: COLORS.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    marginHorizontal: 10,
    marginTop: 10,
    ...SHADOWS.small
  },
  miniImageContainer: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  miniTextContainer: {
    flex: 1,
    padding: 10,
    marginRight: 20,
  },
  miniActivityName: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FONT.bold,
    color: COLORS.neutral,
    alignItems: "center",
    paddingVertical: 3,
  },
  miniDetailsContainer: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  miniDetailsText: {
    fontSize: 14,
    topPadding: 5,
    fontFamily: FONT.regular,
    color: COLORS.neutral,
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
