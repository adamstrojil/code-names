import React from "react";
import { GameVariant } from "./types";

type Props = {
  toggleMode: () => void;
  gameMode: GameVariant;
};

const style = {
  width: "100vw",
  backgroundColor: "#f1dbba",
  display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  marginBottom: "1vh",
};

export function TopBar({ toggleMode, gameMode }: Props) {
  const label = `Switch to ${
    gameMode === "single" ? "mirrored" : "single"
  } mode`;

  return (
    <div style={style}>
      <button onClick={toggleMode}>{label}</button>
    </div>
  );
}
