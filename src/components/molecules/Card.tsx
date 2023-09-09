import { useEffect, useState } from "react";

import styled, { CSSObject } from "@emotion/styled";

import assassin from "../../assets/agentImages/assassin.png";
import blueAgentFemale from "../../assets/agentImages/blueAgentFemale.png";
import blueAgentMale from "../../assets/agentImages/blueAgentMale.png";
import bystanderFemale from "../../assets/agentImages/bystanderFemale.png";
import bystanderMale from "../../assets/agentImages/bystanderMale.png";

import { pickRandomly } from "../../lib/utils";
import { CardRole, GameVariant, Language, Word as WordType } from "../../types";
import { Line, Word } from "../atoms";

type Props = {
  word: WordType;
  cardRole: CardRole;
  gameVariant: GameVariant;
  language: Language;
  onRoleReveal: (role: CardRole) => void;
  isDisabled: boolean;
};

const StyledButtonCard = styled.button<{
  isRoleRevealed: boolean;
  cardRole: CardRole;
  disabled: boolean;
  roleSpecificStyles: CSSObject;
}>(({ isRoleRevealed, roleSpecificStyles, theme, disabled }) => {
  const transition = "cubic-bezier(1, 0.01, 0.47, 0.99) 1s";
  const boxShadow = `0 4px 8px 0 ${theme.colors.card.shadow}32, 0 6px 20px 0 ${theme.colors.card.shadow}32`;

  return {
    transition,
    transitionProperty: "box-shadow",
    backgroundColor: theme.colors.card.hidden,
    color: theme.colors.card.text,
    display: "flex",
    height: "100%",
    width: "100%",
    padding: 0,
    border: "none",
    borderRadius: "10px",
    boxShadow: isRoleRevealed ? "none" : boxShadow,
    "&:hover": {
      cursor: disabled ? "default" : "pointer",
    },
    "&:before": {
      boxShadow,
      transition,
      content: '""',
      transitionProperty: "transform, background-color, opacity, scale",
      willChange: "transform, background-color, opacity, scale",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center",
      borderRadius: "10px",
      position: "absolute",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      scale: isRoleRevealed ? "1" : "2",
      opacity: isRoleRevealed ? 1 : 0,
      zIndex: isRoleRevealed ? 1 : -1,
      ...roleSpecificStyles,
    },
  };
});

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

const getRoleSpecificStyles = (role: CardRole): CSSObject => {
  const cardImageUrl =
    role === "black"
      ? assassin
      : role === "neutral"
      ? pickRandomly(bystanderMale, bystanderFemale)
      : pickRandomly(blueAgentMale, blueAgentFemale);

  const filter =
    role === "red"
      ? "hue-rotate(140deg) contrast(1.6) saturate(0.7)"
      : undefined;

  const flipImageWhenRed = `scaleX(${role === "red" ? "-1" : "1"})`;
  const randomRotationDegree = `${Math.floor(Math.random() * 11) - 5}deg`;

  return {
    filter,
    transform: flipImageWhenRed,
    rotate: randomRotationDegree,
    backgroundImage: `url(${cardImageUrl})`,
  };
};

export function Card({
  word: wordObject,
  cardRole,
  language,
  gameVariant,
  onRoleReveal,
  isDisabled,
}: Props) {
  const [isRoleRevealed, setIsRoleRevealed] = useState(false);
  const [roleSpecificStyles, setRoleSpecificStyles] = useState<CSSObject>({});

  useEffect(() => {
    setRoleSpecificStyles(getRoleSpecificStyles(cardRole));
  }, [cardRole]);

  const isMirroredMode = gameVariant === "mirrored";
  const isDuolingoMode = gameVariant === "duolingo";
  const isSingleMode = gameVariant === "single";

  const word = wordObject[language];

  return (
    <StyledButtonCard
      cardRole={cardRole}
      disabled={isRoleRevealed || isDisabled}
      isRoleRevealed={isRoleRevealed}
      onClick={() => {
        setIsRoleRevealed(true);
        onRoleReveal(cardRole);
      }}
      roleSpecificStyles={roleSpecificStyles}
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
        <Word isBold showBackground word={word} />
      </CardContentContainer>
    </StyledButtonCard>
  );
}
