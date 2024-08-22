import { ImageBackground, StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
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
    color: '#808080',
    
  }
  
});

export default styles;
