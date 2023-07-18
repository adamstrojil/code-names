import { useState } from "react";
import { Optional } from "../../types";

import { BiQrScan } from "react-icons/bi";
import { parseRolesFromCSVString } from "../../lib/utils";
import { Button, Link, QrScanner, TextWithIcon } from "../atoms";
import { GameMap } from "../molecules";
import styled from "@emotion/styled";

const MapPageContainer = styled.div({
  display: "grid",
  justifyContent: "center",
  alignContent: "center",
  textAlign: "center",
  marginTop: "10px",
});

export function MapPage() {
  const [scannedText, setScannedText] = useState<Optional<string>>(null);
  const [isMapRevealed, setIsMapRevealed] = useState<boolean>(false);

  return (
    <MapPageContainer>
      {scannedText ? (
        <>
          <Link to={"/"}>Main menu</Link>
          <GameMap
            isMapRevealed={isMapRevealed}
            rolesForRound={parseRolesFromCSVString(scannedText)}
          />

          {!isMapRevealed && (
            <>
              <h2 style={{ color: "green" }}>Map Ready!</h2>
              <Button onClick={() => setIsMapRevealed(true)}>Reveal Map</Button>
            </>
          )}

          <Button
            onClick={() => {
              setScannedText(null);
              setIsMapRevealed(false);
            }}
          >
            <TextWithIcon text="Scan map" icon={<BiQrScan />} />
          </Button>
        </>
      ) : (
        <>
          <h2>Scan the code from board</h2>
          <QrScanner onScanResult={setScannedText} />
          <div style={{ marginTop: "1rem" }}>
            <Link to={"/"}>Main menu</Link>
          </div>
        </>
      )}
    </MapPageContainer>
  );
}
