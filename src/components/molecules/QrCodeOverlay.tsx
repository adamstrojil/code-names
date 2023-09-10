/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import { selectIsFinished } from "../../features/Game/gameSlice";
import { useAppSelector } from "../../redux/hooks";
import { Box, Button, Overlay, QrCode, TextWithIcon } from "../atoms";
import { ScannerInfoText } from "./ScannerInfoText";

type Props = {
  displayText: string;
  qrCodeText: string;
};

const FADE_OUT_DURATION_MS = 1000;
const TRANSITON_START_STYLES = {
  overlayOpacity: 1,
  qrCodeTopPosition: "0px",
};
const TRANSITON_END_STYLES = {
  overlayOpacity: 0,
  qrCodeTopPosition: "1000px",
};

export function QrCodeOverlay({ displayText, qrCodeText }: Props) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const isGameFinished = useAppSelector(selectIsFinished);
  const [stylesForTransition, setStylesForTransition] = useState(
    TRANSITON_START_STYLES
  );

  useEffect(() => {
    if (!isGameFinished) {
      setIsOverlayVisible(true);
      setStylesForTransition(TRANSITON_START_STYLES);
    }
  }, [isGameFinished, qrCodeText]);

  const fadeOutAndCloseOverlay = () => {
    setStylesForTransition(TRANSITON_END_STYLES);
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, FADE_OUT_DURATION_MS);
  };

  return (
    <Box
      css={{
        opacity: stylesForTransition.overlayOpacity,
        transition: `opacity ${FADE_OUT_DURATION_MS}ms`,
      }}
    >
      <Overlay isVisible={isOverlayVisible}>
        <Box
          display="flex"
          css={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3vh",
          }}
        >
          <h1
            style={{
              fontSize: "7vh",
              lineHeight: "7vh",
              color: "white",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            {displayText}
          </h1>
          <Box
            css={{
              display: "flex",
              flexDirection: "column",
              gap: "1vh",
              alignItems: "center",
            }}
          >
            <div
              style={{
                transition: "top 1s",
                position: "relative",
                top: stylesForTransition.qrCodeTopPosition,
              }}
            >
              <QrCode borderSize="1vh" text={qrCodeText} />
            </div>
            <ScannerInfoText color="white" />
          </Box>
          <Button onClick={fadeOutAndCloseOverlay}>
            <TextWithIcon
              icon={IoIosArrowForward}
              text="We're ready"
              iconPlacement="right"
              gap="2px"
            />
          </Button>
        </Box>
      </Overlay>
    </Box>
  );
}
