/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { MdOutlineRestartAlt } from "react-icons/md";

import { selectIsFinished } from "../../features/Game/gameSlice";
import { useAppSelector } from "../../redux/hooks";
import { Box, Button, Overlay, TextWithIcon } from "../atoms";

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
    <Overlay isVisible={isOverlayVisible} contentHeight="30vh">
      <Box
        display="flex"
        css={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "3vh",
        }}
      >
        <h1 //TODO New Component?
          style={{
            fontSize: "7vh",
            lineHeight: "7vh",
            color: "white",
            textTransform: "uppercase",
            margin: 0,
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
          <Button //TODO: New Component?
            onClick={() => {
              onNewGameButtonClick();
              setIsOverlayVisible(false);
            }}
          >
            <TextWithIcon
              text="New Game"
              icon={MdOutlineRestartAlt}
              iconPlacement="left"
            />
          </Button>
        </Box>
      </Box>
    </Overlay>
  );
}
