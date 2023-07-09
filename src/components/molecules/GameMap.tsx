import React from "react";

import { WordCard } from "../../types";
import { GameMapField } from "../atoms";

type Props = {
  wordsForRound: Array<WordCard>;
};

const mapStyle = {
  width: "34vh",
  height: "34vh",
  display: "flex",
  flexWrap: "wrap" as "wrap",
  justifyContent: "space-around",
  border: "15px solid black",
  borderRadius: "12px",
  backgroundColor: "black",
  marginBottom: "32px",
  marginTop: "16px",
  boxShadow: "0 0 0 5px #bca785",
};

export function GameMap({ wordsForRound }: Props) {
  const map = (
    <div style={mapStyle}>
      {wordsForRound.map(({ role }, index) => (
        <GameMapField key={index.toString()} role={role} />
      ))}
    </div>
  );

  return map;
}
