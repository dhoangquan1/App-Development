const COLORS = {
  primary: "#03310E",
  secondary: "#546021",
  tertiary: "#B9C470",

  neutral: "#F2ECDD",
};

const FONT = {
  thin: "RobotoThin",
  light: "RobotoLight",
  regular: "RobotoRegular",
  medium: "RobotoMedium",
  bold: "RobotoBold",
  serifBlack: "RobotoSerifBlack",
  flex: "RobotoFlex"
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
