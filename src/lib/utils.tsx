import { WORD_BANK } from "../WordBank";
import { CardRole, Word, WordCard } from "../types/types";

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

export const mapRoleToStyles = (role: CardRole, isRoleRevealed = true) => {
  const roleToColorStylesMap = {
    neutral: { backgroundColor: isRoleRevealed ? "#efefef" : "white" },
    blue: { backgroundColor: isRoleRevealed ? "#7acaff" : "white" },
    red: { backgroundColor: isRoleRevealed ? "#ff5d56" : "white" },
    black: {
      backgroundColor: isRoleRevealed ? "black" : "white",
      color: "white",
    },
  };
  return {
    color: `rgba(0,0,0,${isRoleRevealed ? "0.2" : "1"})`,
    ...roleToColorStylesMap[role],
  };
};

export const mapRoleToSign: { [key in CardRole]: string } = {
  black: "💀",
  red: "◯", //○
  neutral: "",
  blue: "◯",
};

export const parseRolesFromCSVString = (text: string): Array<CardRole> => {
  return text.split(",") as Array<CardRole>;
};

export const getNewWordCardSet = () => assignRoles(get25RandomWords(WORD_BANK));
