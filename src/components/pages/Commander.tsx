import { useState } from "react";

import { Optional } from "../../types";
import { GameMap } from "../molecules";
import { QrScanner } from "../atoms/QrScanner";
import { Button } from "../atoms/Button";
import { parseRolesFromCSVString } from "../../lib/utils";

export function Commander() {
  const [scannedText, setScannedText] = useState<Optional<string>>(null);
  const [isMapRevealed, setIsMapRevealed] = useState<boolean>(false);

  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      {scannedText ? (
        <>
          <GameMap
            isBlurred={!isMapRevealed}
            rolesForRound={parseRolesFromCSVString(scannedText)}
          />
          {!isMapRevealed && (
            <>
              <h2>Map successfully scanned!</h2>
              <Button onClick={() => setIsMapRevealed(true)}>Show Map</Button>
            </>
          )}

          <Button
            onClick={() => {
              setScannedText(null);
              setIsMapRevealed(false);
            }}
          >
            New Scan
          </Button>
        </>
      ) : (
        <>
          <h2>Scan the code below playing board</h2>
          <QrScanner onScanResult={setScannedText} />
        </>
      )}
    </div>
  );
}
