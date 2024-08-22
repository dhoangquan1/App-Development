import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: 15,
    backgroundColor: '#194f3e',
    flex: 1,
    width: "100%",
  },
  cardsContainer: {
    padding: SIZES.medium,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Roboto Flex",
    color: '#fff',
  },
  image: {
    flex: 1,
    width: 145 - SIZES.medium,
    height: 145 - SIZES.medium,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: "RobotoFlex-Regular",
    color: '#bfbfbf',
    textAlign: "left",
    width: 223
  },
  button: {
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: '#43cea2',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  learnMore: {
    fontSize: 16,
    fontFamily: "RobotoFlex-Regular",
    textAlign: 'center',
    color: '#000',
  }
  
});

export default styles;
