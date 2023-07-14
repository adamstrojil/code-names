import { useContext, useState } from "react";
import { Optional } from "../../types";

import { Button, QrScanner } from "../atoms";
import { parseRolesFromCSVString } from "../../lib/utils";
import { GameMap } from "../molecules";
import { GameContext } from "../../context/GameContext";

export function MapPage() {
  const [scannedText, setScannedText] = useState<Optional<string>>(null);
  const [isMapRevealed, setIsMapRevealed] = useState<boolean>(false);
  const { updateContext } = useContext(GameContext);

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        // height: "100vh",
      }}
    >
      {scannedText ? (
        <>
          <GameMap
            isBlurred={!isMapRevealed}
            rolesForRound={parseRolesFromCSVString(scannedText)}
          />
          {!isMapRevealed && (
            <>
              <h2>Map Ready!</h2>
              <Button onClick={() => setIsMapRevealed(true)}>Reveal Map</Button>
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
      <Button onClick={() => updateContext({ page: "mainMenu" })}>
        Back to main menu
      </Button>
    </div>
  );
}
