import { ImageBackground, StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0, //25
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    //marginHorizontal: 20,
    paddingVertical: 10,
    //borderRadius: 25,
    //borderTopColor: COLORS.tertiary,
    //borderWidth: 2,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,

  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 26,
    width: 26,
    color: COLORS.primary,
    
  }
  
});

export default styles;
