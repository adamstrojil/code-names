/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { RxInfoCircled } from "react-icons/rx";

import {
  selectIsFinished,
  selectRolesInCSVString,
} from "../../features/Game/gameSlice";
import { useAppSelector } from "../../redux/hooks";
import { Box, Button, Overlay, QrCode, TextWithIcon } from "../atoms";

type Props = {
  text: string;
};

const FADE_OUT_DURATION_MS = 1000;

export function QrCodeOverlay({ text }: Props) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const rolesInCSVString = useAppSelector(selectRolesInCSVString);
  const isGameFinished = useAppSelector(selectIsFinished);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (!isGameFinished) {
      setIsOverlayVisible(true);
      setOpacity(1);
    }
  }, [isGameFinished, rolesInCSVString]);

  const fadeOutAndCloseOverlay = () => {
    setOpacity(0);
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, FADE_OUT_DURATION_MS);
  };

  return (
    <Box css={{ opacity, transition: `opacity ${FADE_OUT_DURATION_MS}ms` }}>
      <Overlay isVisible={isOverlayVisible}>
        <h1
          style={{
            fontSize: "5rem",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          {text}
        </h1>
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <QrCode size={500} text={rolesInCSVString} />
          <TextWithIcon
            css={{ fontSize: "1rem" }}
            color={"white"}
            text={"Currently only scanner from this page is supported."}
            icon={RxInfoCircled}
            iconPlacement="left"
          />
          <Box mt="32px">
            <Button onClick={fadeOutAndCloseOverlay}>We&apos;re ready!</Button>
          </Box>
        </Box>
      </Overlay>
    </Box>
  );
}
