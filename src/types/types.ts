import { ThemeName } from "../theme/theme";

export type TeamColor = "blue" | "red";

export type Optional<T> = T | null;

export type CardRole = TeamColor | "neutral" | "black";

export type GameVariant = "single" | "mirrored" | "duolingo";

export type Language = "english" | "czech" | "turkish";

export type WordCard = {
  word: Word;
  role: CardRole;
};

export type Word = {
  [key in Language]: string;
};

export type GameState = {
  theme: ThemeName;
  language: Language;
  gameVariant: GameVariant;
  startingColor: TeamColor;
};
