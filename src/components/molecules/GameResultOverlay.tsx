/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";

import { selectIsFinished } from "../../features/Game/gameSlice";
import { useAppSelector } from "../../redux/hooks";
import { Box, Button, Overlay } from "../atoms";

type Props = {
  text: string;
  onNewGameButtonClick: () => void;
};

export function GameResultOverlay({ text, onNewGameButtonClick }: Props) {
  const isGameFinished = useAppSelector(selectIsFinished);
  const [isOverlayVisible, setIsOverlayVisible] = useState(isGameFinished);

  useEffect(() => {
    isGameFinished && setIsOverlayVisible(true);
  }, [isGameFinished]);

  return (
    <Overlay isVisible={isOverlayVisible}>
      <h1
        style={{
          fontSize: "10rem",
          color: "white",
          textTransform: "uppercase",
        }}
      >
        {text}
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
            onNewGameButtonClick();
            setIsOverlayVisible(false);
        
          }}
        >
          New Game
        </Button>
      </Box>
    </Overlay>
  );
}
