/** @jsxImportSource @emotion/react */

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useContext, useEffect, useMemo, useReducer, useState } from "react";

import { GameContext } from "../../context/GameContext";
import { getNewWordCardSet } from "../../lib/utils";
import { Optional, TeamColor, WordCard } from "../../types";
import { Box, Button, Overlay } from "../atoms";
import { Card } from "../molecules";

type Props = {
  wordCards: Array<WordCard>;
  setWordCards: (words: Array<WordCard>) => void;
};

const BoardContainer = styled.div({
  display: "flex",
  flexWrap: "wrap",
  height: "100vh",
  overflowX: "clip",
  //overflowY: "hidden",
});

const CARD_ANIMATION_BASE_DELAY_MS = 30;
const CARD_ANIMATION = keyframes`
from {
  opacity: 0;
  transform: scale(1.1);
}
to {
  opacity: 1;
  transform: scale(1);
}
`;

type State = {
  redLeft: number;
  blueLeft: number;
};

type Action = { type: "UPDATE_COUNT"; payload: TeamColor } | { type: "INIT" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "UPDATE_COUNT":
      return {
        ...state,
        ...(action.payload === "red"
          ? { redLeft: state.redLeft - 1 }
          : { blueLeft: state.blueLeft - 1 }),
      };
    case "INIT":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

// Define the initial state
const initialState: State = {
  redLeft: 9,
  blueLeft: 8,
};

export function Board({ wordCards, setWordCards }: Props) {
  const { gameVariant, language } = useContext(GameContext).gameState;
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [winner, setWinner] = useState<Optional<TeamColor>>(null);
  const [currentGameState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (currentGameState.blueLeft === 0) {
      setWinner("blue");
      setIsOverlayVisible(true);
    } else if (currentGameState.redLeft === 0) {
      setWinner("red");
      setIsOverlayVisible(true);
    } else {
      setWinner(null);
    }
    // return () => setIsOverlayVisible(false);
  }, [currentGameState.blueLeft, currentGameState.redLeft]);

  const updateCardCount = (role: TeamColor) => {
    dispatch({ type: "UPDATE_COUNT", payload: role });
  };

  const children = useMemo(
    () => (
      <BoardContainer>
        {wordCards.map(({ word, role }, index) => {
          const flowAnimationDelayMs = CARD_ANIMATION_BASE_DELAY_MS * index;
          const cardCssAnimationShorthand = `${CARD_ANIMATION} 300ms ease-in-out ${flowAnimationDelayMs}ms forwards`;
          return (
            <Card
              onRevealed={(role) => {
                role === "black"
                  ? setIsOverlayVisible(true)
                  : role !== "neutral"
                  ? updateCardCount(role)
                  : null;
              }}
              cssAnimationShorthand={cardCssAnimationShorthand}
              key={word.english + index + role}
              word={word}
              cardRole={role}
              gameVariant={gameVariant}
              language={language}
            />
          );
        })}
      </BoardContainer>
    ),
    [wordCards,gameVariant,language]
  );

  return (
    <>
      {children}
      <Overlay isOpen={isOverlayVisible}>
        <h1
          style={{
            fontSize: "10rem",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          {winner ? `Team ${winner} won!` : "game over!"}
        </h1>
        <Box css={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Button
            onClick={() => {
              setIsOverlayVisible(false);
            }}
          >
            Dismiss
          </Button>
          <Button
            onClick={() => {
              setIsOverlayVisible(false);
              setWordCards(getNewWordCardSet());
              dispatch({ type: "INIT" });
            }}
          >
            New Game
          </Button>
        </Box>
      </Overlay>
    </>
  );
}
