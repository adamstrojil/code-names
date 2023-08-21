import { useState } from "react";

import styled from "@emotion/styled";
import blueAgentFemale from "../../assets/agentImages/blueAgentFemale.png";
import redAgentFemale from "../../assets/agentImages/redAgentFemale.png";
import blueAgentMale from "../../assets/agentImages/blueAgentMale.png";
import redAgentMale from "../../assets/agentImages/redAgentMale.png";
import assassin from "../../assets/agentImages/assassin.png";
import bystanderFemale from "../../assets/agentImages/bystanderFemale.png";
import bystanderMale from "../../assets/agentImages/bystanderMale.png";

import {
  mapRoleToBackgroundColor,
  // mapRoleToForegroundColor,
} from "../../lib/utils";
import { CardRole, GameVariant, Language, Word as WordType } from "../../types";
import { Line, Word } from "../atoms";

type Props = {
  word: WordType;
  cardRole: CardRole;
  gameVariant: GameVariant;
  language: Language;
};

const StyledButtonCard = styled.button<{
  isRoleRevealed: boolean;
  cardRole: CardRole;
}>(({ isRoleRevealed, cardRole, theme }) => ({
  position: "relative",
  transition: "cubic-bezier(1, 0.01, 0.47, 0.99) 1s",
  height: "16vh",
  width: "18vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  padding: 0,
  border: "none",
  borderRadius: "10px",
  boxShadow: isRoleRevealed
    ? "none"
    : `0 4px 8px 0 ${theme.colors.card.shadow}32, 0 6px 20px 0 ${theme.colors.card.shadow}32`,
  color: isRoleRevealed
    ? theme.colors.card.text //mapRoleToForegroundColor(cardRole, theme)
    : theme.colors.card.text,
  backgroundColor: theme.colors.card.hidden,
  "&:hover": {
    cursor: isRoleRevealed ? "default" : "pointer",
  },
  "&:before": {
    transition: "cubic-bezier(1, 0.01, 0.47, 0.99) 1s",
    transitionProperty: "transform, background-color, opacity",
    willChange: "transform, background-color, opacity",

    backgroundImage: `url(${
      cardRole === "blue" || cardRole === "red"
        ? Math.random() < 0.5
          ? blueAgentFemale
          : blueAgentMale
        : // : cardRole === "red"
        // ? Math.random() < 0.5
        //   ? redAgentFemale
        //   : redAgentMale
        cardRole === "neutral"
        ? Math.random() < 0.5
          ? bystanderMale
          : bystanderFemale
        : assassin
    })`,
    filter:
      cardRole === "neutral"
        ? "saturate(0.5)"
        : cardRole === "red"
        ? "hue-rotate(140deg) contrast(1.6) saturate(0.7)"
        : "",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",

    content: '""',
    borderRadius: "10px",
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: isRoleRevealed ? 1 : 0,
    zIndex: isRoleRevealed ? 1 : -1,
    transform: `scale(${isRoleRevealed ? "1" : "2"}) rotate(${
      Math.floor(Math.random() * 11) - 5
    }deg) scaleX(${cardRole === "red" ? "-1" : "1"})`,
    backgroundColor: isRoleRevealed
      ? mapRoleToBackgroundColor(cardRole, theme)
      : theme.colors.card.hidden,
    boxShadow: ` 0 4px 8px 0 ${theme.colors.card.shadow}32, 0 6px 20px 0 ${
      theme.colors.card.shadow
    }32 ${cardRole !== "red" ? ",inset 0px 0px 50px #00000099" : ""}`,
  },
}));

const CardContentContainer = styled.span<{ isSingleMode: boolean }>(
  ({ isSingleMode, theme }) => ({
    width: "calc(100% - 28px)",
    height: "calc(100% - 28px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "5px",
    border: `1px solid ${theme.colors.card.border}`,
    borderRadius: "10px",
    padding: "8px",
    gap: "2px",
    fontWeight: "bolder",
    justifyContent: isSingleMode ? "center" : "space-between",
  })
);

export function Card({
  word: wordObject,
  cardRole = "neutral",
  language,
  gameVariant,
}: Props) {
  const [isRoleRevealed, setIsRoleRevealed] = useState(false);

  const isMirroredMode = gameVariant === "mirrored";
  const isDuolingoMode = gameVariant === "duolingo";
  const isSingleMode = gameVariant === "single";

  const word = wordObject[language];

  return (
    <StyledButtonCard
      cardRole={cardRole}
      isRoleRevealed={isRoleRevealed}
      onClick={() => setIsRoleRevealed(true)}
    >
      <CardContentContainer isSingleMode={isSingleMode}>
        {!isSingleMode && (
          <>
            <Word
              isMirrored={isMirroredMode}
              word={isDuolingoMode ? wordObject.english : word}
            />
            <Line />
          </>
        )}
        <Word isBold word={word} showBackground={true} />
      </CardContentContainer>
    </StyledButtonCard>
  );
}
