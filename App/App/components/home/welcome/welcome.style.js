import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

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
    width: "100%",
  },
  username: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: "300",
    fontFamily: FONT.light,
    color: COLORS.primary,
  },
  welcome: {
    fontSize: 30,
    fontWeight: "700",
    fontFamily: FONT.bold,
    color: COLORS.primary,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
    
  },
  searchWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
    borderWidth: 2,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.neutral,
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  searchInput: {
    fontFamily: FONT.regular,
    fontSize: 16,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,

  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: 10,
    backgroundColor: getTabColors(item),
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.primary,
    borderWidth: 2,
  }),
  tabText: {
    color: COLORS.primary,
    fontFamily: FONT.flex,
    fontWeight: "200",
    fontSize: 16,
  },
});

export default styles;
