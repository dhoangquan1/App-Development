import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
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
});

export default styles;
