/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { useEffect } from "react";

import {
  generateWordCards,
  restartGame,
  selectRolesInBase64CSVString,
  selectWinner,
} from "../../features/Game/gameSlice";
import { buildLinkToURLDataMap, scrollToTop } from "../../lib/utils";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { QrCode } from "../atoms";
import {
  GameResultOverlay,
  QrCodeOverlay,
  ScannerInfoText,
} from "../molecules";
import { Board, OptionsMenu } from "../organisms";

const QrSectionContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "48px",
  marginBottom: "64px",
  gap: "16px",
});

export function BoardPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(generateWordCards());
  }, []);

  const winner = useAppSelector(selectWinner);
  const rolesInCSVString = useAppSelector(selectRolesInBase64CSVString);
  const qrCodeLinkWithRoles = buildLinkToURLDataMap(rolesInCSVString);

  return (
    <>
      <Board />
      <OptionsMenu />
      <QrSectionContainer>
        <QrCode text={qrCodeLinkWithRoles} />
        <ScannerInfoText />
      </QrSectionContainer>
      <QrCodeOverlay
        displayText={"scan for the map"}
        qrCodeText={qrCodeLinkWithRoles}
      />
      <GameResultOverlay
        text={winner ? `team ${winner} wins!` : "game over!"}
        onNewGameButtonClick={() => {
          dispatch(restartGame());
          scrollToTop();
        }}
      />
    </>
  );
}
