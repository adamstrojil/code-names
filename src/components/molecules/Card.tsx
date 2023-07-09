import React, { useContext, useState } from "react";

import { CardRole } from "../../types";
import { mapRoleToStyles } from "../../lib/utils";
import { Word } from "../atoms";
import { GameContext } from "../../context/GameContext";

type Props = {
  word: string;
  cardRole: CardRole;
};

const styleOuter = {
  height: "15vh",
  width: "18vw",
  backgroundColor: "#f1dbba",
  display: "flex",
  flexDirection: "column" as "column", //wtf
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  borderRadius: "5px",
  cursor: "pointer",
  boxShadow:
    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

const styleInner = {
  width: "calc(100% - 28px)",
  height: "calc(100% - 28px)",
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "5px",
  border: "1px solid #8e775488",
  borderRadius: "5px",
  padding: "8px",
};

const styleMirrored = {
  transform: "rotate(180deg)",
  fontWeight: "normal" as "normal",
};

const hrStyle = {
  width: "90%",
  borderTop: "1px solid #0000001a",
  borderBottom: "0px",
};

export function Card({ word, cardRole = "neutral" }: Props) {
  const [roleRevealed, setRoleRevealed] = useState<boolean>(false);
  const { gameVariant } = useContext(GameContext).gameState

  const displayMirrored = gameVariant === "mirrored";

  return (
    <div
      style={{
        ...styleOuter,
        ...(roleRevealed ? mapRoleToStyles(cardRole) : {}),
      }}
      onClick={() => setRoleRevealed(true)}
    >
      {displayMirrored ? (
        <div style={styleInner}>
          <div style={styleMirrored}>
            <Word word={word} />
          </div>
          <hr style={hrStyle} />
          <Word word={word} showBackground={!roleRevealed} />
        </div>
      ) : (
        <div style={styleInner}>
          <Word word={word} showBackground={!roleRevealed} />
        </div>
      )}
    </div>
  );
}
