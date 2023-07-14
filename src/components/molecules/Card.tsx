import { useContext, useState } from "react";

import { GameContext } from "../../context/GameContext";
import { mapRoleToStyles } from "../../lib/utils";
import { CardRole, Word as WordType } from "../../types";
import { Word } from "../atoms";

type Props = {
  word: WordType;
  cardRole: CardRole;
};

const buttonStyles = {
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
  border: "none",
  padding: 0,
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
  fontWeight: "bolder" as const,
};

const hrStyle = {
  width: "90%",
  borderTop: "1px solid #0000001a",
  borderBottom: "0px",
};

export function Card({ word: wordObject, cardRole = "neutral" }: Props) {
  const [isroleRevealed, setIsRoleRevealed] = useState(false);
  const { gameVariant, language } = useContext(GameContext).gameState;

  const isMirroredMode = gameVariant === "mirrored";
  const isDuolingoMode = gameVariant === "duolingo";
  const isSingleMode = gameVariant === "single";
  
  const word = wordObject[language];

  return (
    <button
      style={{
        ...buttonStyles,
        ...(isroleRevealed
          ? { ...mapRoleToStyles(cardRole, isroleRevealed) }
          : {}),
      }}
      onClick={() => setIsRoleRevealed(true)}
    >
      <span style={styleInner}>
        {!isSingleMode && (
          <>
            <Word
              isMirrored={isMirroredMode}
              word={isDuolingoMode ? wordObject.english : word}
            />
            <hr style={hrStyle} />
          </>
        )}
        <Word isBold word={word} showBackground={!isroleRevealed} />
      </span>
    </button>
  );
}
