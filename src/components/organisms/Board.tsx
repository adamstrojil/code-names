import styled from "@emotion/styled";
import { useContext } from "react";

import { GameContext } from "../../context/GameContext";
import { WordCard } from "../../types";
import { Card } from "../molecules";

type Props = {
  words: Array<WordCard>;
};

const BoardContainer = styled.div({
  display: "flex",
  flexWrap: "wrap",
  height: "100vh",
  backgroundColor: "white",
  paddingRight: "1vw",
  paddingLeft: "1vw",
});

export function Board({ words }: Props) {
  const { gameVariant, language } = useContext(GameContext).gameState;

  return (
    <BoardContainer>
      {words.map(({ word, role }, index) => (
        <Card
          key={word.english + index}
          word={word}
          cardRole={role}
          gameVariant={gameVariant}
          language={language}
        />
      ))}
    </BoardContainer>
  );
}
