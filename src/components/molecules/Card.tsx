import { useState } from "react";

import styled from "@emotion/styled";
// import blueAgent from "../../assets/local/blueAgent.png";
// import redAgent from "../../assets/local/redAgent.png";
// import blueAgent2 from "../../assets/local/blueAgent2.png";
// import redAgent2 from "../../assets/local/redAgent2.png";
// import blackAgent from "../../assets/local/blackAgent.png";
// import bystander from "../../assets/local/bystander.png";
// import bystander2 from "../../assets/local/bystander2.png";

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
  "&:before": {
    transition: "cubic-bezier(1, 0.01, 0.47, 0.99) 1s",
    transitionProperty: "transform, background-color, opacity",
    willChange: "transform, background-color, opacity",

    // backgroundImage: `url(${
    //   cardRole === "blue"
    //     ? Math.random() < 0.5 ? blueAgent : blueAgent2
    //     : cardRole === "red"
    //     ? Math.random() < 0.5 ? redAgent : redAgent2
    //     : cardRole === "neutral"
    //     ? Math.random() < 0.5 ? bystander : bystander2
    //     : blackAgent
    // })`,
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "top center",

    content: '""',
    borderRadius: "10px",
    border: `0px solid #222`,
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: isRoleRevealed ? 1 : 0,
    zIndex: isRoleRevealed ? 1 : -1,
    transform: `scale(${isRoleRevealed ? "1" : "2"}) rotate(${
      Math.floor(Math.random() * 11) - 5
    }deg) `,
    backgroundColor: isRoleRevealed
      ? mapRoleToBackgroundColor(cardRole, theme)
      : theme.colors.card.hidden,
    boxShadow: ` 0 4px 8px 0 ${theme.colors.card.shadow}32, 0 6px 20px 0 ${theme.colors.card.shadow}32`,
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
