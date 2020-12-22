export type CardRole = "neutral" | "blue" | "red" | "black";

export type GameVariant = "single" | "mirrored";

export type WordCard = {
  word: string;
  role: CardRole;
  // roleRevealed: boolean;
};
