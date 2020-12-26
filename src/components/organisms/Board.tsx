import React from "react";

import { GameVariant, WordCard } from "../../types";
import { Card } from "../molecules";

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
  paddingRight: "1vw",
  paddingLeft: "1vw",
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
