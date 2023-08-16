import { Theme } from "@emotion/react";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { colors } from "./colors";

export type ThemeName = "dark" | "light";

export type MyTheme = {
  // blueTeam: string,
  // redTeam: string,
  gameBackground: string;
  text: string;
  buttonBackground: string;
  successText: string;
  errorText: string;
  card: {
    line: string;
    text: string;
    inversedText: string, //TODO refactor
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
    // background: string;
    // foreground: string;
    border: string,
  }
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
      // background: colors.white,
      // foreground: colors.black,
      border: colors.white,

    }
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
      line: `${colors.white}1a`,
      inversedText: colors.alot,
      text: colors.white,
      textBackground: colors.shark,
      hidden: colors.bistre,
      neutral: colors.sharkLight,
      blue: colors.chathamsBlue,
      red: colors.darkTan,
      black: colors.black,
      shadow: colors.black,
      border: `${colors.shadow}80`, //TODO refactor transparency
    },
    map: {
      border: colors.capeCod,
      fieldShadow: colors.black,
      text: colors.alot,
    },
    qr: {
      // background: colors.white,
      // foreground: colors.black,
      border: colors.white,
    }
  },
};

const themeNametoTheme: { [key in ThemeName]: Theme } = {
  dark: darkTheme,
  light: lightTheme,
};

export const useTheme = () => {
  const {
    gameState: { theme: themeName },
    updateContext,
  } = useContext(GameContext);

  const toggleTheme = () => {
    updateContext({ theme: themeName === "light" ? "dark" : "light" });
  };

  return { theme: themeNametoTheme[themeName], toggleTheme, themeName };
};