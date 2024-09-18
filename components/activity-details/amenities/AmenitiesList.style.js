import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tag: {
    width: '48%',
    marginVertical: 5,
    backgroundColor: COLORS.tertiary,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 5,
  },
  tagText: {
    
  }
});

export default styles;