import React from "react";
import { CardRole, WordCard } from "./types";
import { mapRoleToStyles } from "./utils";

type Props = {
  wordsForRound: Array<WordCard>;
};

const mapStyle = {
  width: "35vh",
  height: "35vh",
  display: "flex",
  flexWrap: "wrap" as "wrap",
  justifyContent: "space-around",
  border: "5px solid black",
  borderRadius: "7px",
  backgroundColor: "black",
  marginBottom: "32px",
};

const fieldStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "6vh",
  height: "6vh",
  margin: "auto",
  fontSize: "25px",
  color: "white",
};

export function GameKey({ wordsForRound }: Props) {
  const mapRoleToSign: { [key in CardRole]: string } = {
    black: "💀",
    red: "○",
    neutral: "",
    blue: "○",
  };

  const map = (
    <div style={mapStyle}>
      {wordsForRound.map(({ role }) => {
        return (
          <div style={{ ...fieldStyle, ...mapRoleToStyles(role) }}>
            {mapRoleToSign[role]}
          </div>
        );
      })}
    </div>
  );

  const list = (
    <div>
      {wordsForRound.map(({ word, role }) => {
        return (
          <>
            {word} is {role}
            <br />{" "}
          </>
        );
      })}
    </div>
  );

  return map;
}
