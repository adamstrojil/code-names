import { CardRole, Language } from "../types/types";
import { WORD_BANK_EN, WORD_BANK_CZE, WORD_BANK_TR } from "../WordBank";

export const mapRoleToStyles = (role: CardRole) => {
  const styles = {
    blue: { backgroundColor: "#7acaff" },
    red: { backgroundColor: "#ff5d56" },
    black: { backgroundColor: "black", color: "white" },
    neutral: { backgroundColor: "#efefef" },
  };
  return styles[role];
};

export const mapLanguageToWordBank: { [key in Language]: Array<string> } = {
  EN: WORD_BANK_EN,
  CZE: WORD_BANK_CZE,
  TR: WORD_BANK_TR,
};

// export const buildDB = () => {
//   console.log("WORD_BANK_CZE", WORD_BANK_CZE);
//   return WORD_BANK_EN.map((word, index) => {
//     return {
//       default: word,
//       english: word,
//       turkish: WORD_BANK_TR[index],
//       czech: WORD_BANK_CZE[index],
//     };
//   });
// };

export const mapRoleToSign: { [key in CardRole]: string } = {
  black: "💀",
  red: "○",
  neutral: "",
  blue: "○",
};
