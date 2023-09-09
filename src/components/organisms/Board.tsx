import styled from "@emotion/styled";

import {
  restartGame,
  selectGameState,
  setIsFinished,
  updateScore,
} from "../../features/Game/gameSlice";
import { isTeamColor, scrollToTop } from "../../lib/utils";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { WordCard } from "../../types";
import {
  Card,
  GameResultOverlay,
  QrCodeOverlay,
  Transition,
} from "../molecules";

const BoardContainer = styled.div({
  display: "flex",
  flexWrap: "wrap",
  height: "100vh",
  overflowX: "clip",
});

const BoardItem = styled.div({
  display: "flex",
  position: "relative",
  height: "16vh",
  width: "18vw",
  flexDirection: "column",
  margin: "auto",
});

const CARD_ANIMATION_BASE_DELAY_MS = 30;

export function Board() {
  const {
    variant: gameVariant,
    language: gameLanguage,
    winner,
    isFinished,
    wordCards,
  } = useAppSelector(selectGameState);

  const dispatch = useAppDispatch();

  return (
    <BoardContainer>
      {wordCards.map(({ word, role, id }, index) => {
        return (
          <BoardItem key={id}>
            <Transition
              delay={CARD_ANIMATION_BASE_DELAY_MS * index}
              otherStyles={{ width: "100%", height: "100%" }}
            >
              <Card
                word={word}
                cardRole={role}
                isDisabled={isFinished}
                onRoleReveal={(role) => {
                  isTeamColor(role)
                    ? dispatch(updateScore({ role }))
                    : role === "black"
                    ? dispatch(setIsFinished(true))
                    : undefined;
                }}
                gameVariant={gameVariant}
                language={gameLanguage}
              />
            </Transition>
          </BoardItem>
        );
      })}
      <QrCodeOverlay text={"scan for the map"} />
      <GameResultOverlay
        text={winner ? `team ${winner} wins!` : "game over!"}
        onNewGameButtonClick={() => {
          dispatch(restartGame());
          scrollToTop();
        }}
      />
    </BoardContainer>
  );
}
