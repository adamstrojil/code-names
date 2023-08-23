import { ReactNode } from "react";
import { ImCross } from "react-icons/im";
import { BsCircle } from "react-icons/bs";

import { WORD_BANK } from "../WordBank";
import { CardRole, Optional, Word, WordCard } from "../types/types";
import { Theme } from "@emotion/react";

const get25RandomWords = (wordBank: Array<Word>): Array<Word> =>
  wordBank.sort(() => Math.random() - 0.5).slice(0, 25);

const assignRoles = (words: Array<Word>): Array<WordCard> => {
  const assigned = words.map((word, index) => {
    return {
      word,
      role:
        index <= 8
          ? ("red" as const)
          : index > 8 && index <= 16
          ? ("blue" as const)
          : index > 16 && index < 24
          ? ("neutral" as const)
          : ("black" as const),
    };
  });

  return assigned.sort(() => Math.random() - 0.5);
};

export const mapRoleToBackgroundColor = (
  role: CardRole,
  theme: Theme
): string => {
  const roleToBackgroundColorMap: { [key in CardRole]: string } = {
    neutral: theme.colors.card.neutral,
    blue: theme.colors.card.blue,
    red: theme.colors.card.red,
    black: theme.colors.card.black,
  };

  return roleToBackgroundColorMap[role];
};

export const roleToSignMap: { [key in CardRole]: Optional<ReactNode> } = {
  black: <ImCross />,
  red: <BsCircle />,
  neutral: null,
  blue: <BsCircle />,
};

export const parseRolesFromCSVString = (text: string): Array<CardRole> => {
  const parsedValues = text.split(",") as Array<CardRole>;
  const acceptedValues: Array<CardRole> = ["red", "blue", "black", "neutral"];

  const wasParsingSuccessful = parsedValues.every((value) =>
    acceptedValues.includes(value)
  );
  return wasParsingSuccessful ? parsedValues : [];
};

export const pickRandomly = <T,>(option1: T, option2: T): T =>
  Math.random() > 0.5 ? option1 : option2;

export const getNewWordCardSet = () => assignRoles(get25RandomWords(WORD_BANK));
