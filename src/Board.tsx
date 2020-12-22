import React from "react";
import { Card } from "./Card";
import { GameVariant, WordCard } from "./types";

type Props = {
  words: Array<WordCard>;
  gameVariant: GameVariant;
};
const style = {
  display: "flex",
  flexWrap: "wrap" as "wrap",
  height: "100vh",
  backgroundColor: "white",
  fontFamily: "tahoma",
  fontWeight: "bolder" as "bolder",
  paddingRight: "16px",
  paddingLeft: "16px",
};

export function Board({ words, gameVariant }: Props) {
  return (
    <div style={style}>
      {words.map(({ word, role }, index) => (
        <Card
          key={word + "" + index}
          variant={gameVariant}
          word={word}
          cardRole={role}
        />
      ))}
    </div>
  );
}
