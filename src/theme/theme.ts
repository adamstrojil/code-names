import { Theme } from "@emotion/react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  changeTheme as changeThemeAction,
  selectTheme,
} from "../features/App/appSlice";
import { colors } from "./colors";

export type ThemeName = "dark" | "light";

export type MyTheme = {
  gameBackground: string;
  text: string;
  buttonBackground: string;
  successText: string;
  errorText: string;
  card: {
    line: string;
    text: string;
    inversedText: string; //TODO refactor
    textBackground: string;
    hidden: string;
    neutral: string;
    blue: string;
    red: string;
    black: string;
    border: string;
    shadow: string;
  };
  map: {
    border: string;
    fieldShadow: string;
    text: string;
  };
  qr: {
    border: string;
  };
};

const lightTheme: Theme = {
  colors: {
    gameBackground: colors.white,
    text: colors.black,
    buttonBackground: colors.gallery,
    successText: colors.japaneseLaurel,
    errorText: colors.red,
    card: {
      line: `${colors.black}1a`,
      inversedText: colors.white,
      text: colors.black,
      textBackground: colors.white,
      hidden: colors.chamois,
      neutral: colors.gallery,
      blue: colors.malibu,
      red: colors.persimmon,
      black: colors.black,
      border: `${colors.shadow}80`, //TODO refactor transparency
      shadow: colors.black,
    },
    map: {
      border: colors.frenchGray,
      fieldShadow: colors.black,
      text: colors.white,
    },
    qr: {
      border: colors.white,
    },
  },
};

const darkTheme: Theme = {
  colors: {
    gameBackground: colors.shark,
    text: colors.white,
    buttonBackground: colors.sharkLight,
    successText: colors.japaneseLaurel,
    errorText: colors.red,
    card: {
      line: `${colors.white}0d`,
      inversedText: colors.alot,
      text: colors.white,
      textBackground: `${colors.white}0d`,
      hidden: colors.transparent,
      neutral: colors.sharkLight,
      blue: colors.chathamsBlue,
      red: colors.darkTan,
      black: colors.black,
      shadow: colors.black,
      border: colors.sharkLight,
    },
    map: {
      border: colors.capeCod,
      fieldShadow: colors.black,
      text: colors.alot,
    },
    qr: {
      border: colors.white,
    },
  },
};

const themeNametoTheme: { [key in ThemeName]: Theme } = {
  dark: darkTheme,
  light: lightTheme,
};

export const useTheme = () => {
  const themeName = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    dispatch(changeThemeAction(themeName === "light" ? "dark" : "light"));
  };

  const changeTheme = (themeName?: ThemeName) => {
    themeName ? changeThemeAction(themeName) : toggleTheme();
  };

  return { theme: themeNametoTheme[themeName], changeTheme, themeName };
};
