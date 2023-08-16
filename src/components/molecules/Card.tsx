import { useState } from "react";

import styled from "@emotion/styled";

import {
  mapRoleToBackgroundColor,
  mapRoleToForegroundColor,
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
  height: "16vh",
  width: "18vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  padding: 0,
  border: "none",
  borderRadius: "5px",
  boxShadow: ` 0 4px 8px 0 ${theme.colors.card.shadow}32, 0 6px 20px 0 ${theme.colors.card.shadow}32`,

  ...(isRoleRevealed
    ? {
        backgroundColor: mapRoleToBackgroundColor(cardRole, theme),
        color: mapRoleToForegroundColor(cardRole, theme),
      }
    : {
        backgroundColor: theme.colors.card.hidden,
        color: theme.colors.card.text,
      }),
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
    borderRadius: "5px",
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
        <Word isBold word={word} showBackground={!isRoleRevealed} />
      </CardContentContainer>
    </StyledButtonCard>
  );
}
