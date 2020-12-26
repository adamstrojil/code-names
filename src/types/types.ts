export type TeamColor = "blue" | "red";

export type CardRole = TeamColor | "neutral" | "black";

export type GameVariant = "single" | "mirrored";

export type Language = "EN" | "CZE";

export type WordCard = {
  word: string;
  role: CardRole;
};

export type Theme = "light" | "dark";

export type GameState = {
  theme: Theme;
  language: Language;
  gameVariant: GameVariant;
  startingColor: TeamColor;
};
