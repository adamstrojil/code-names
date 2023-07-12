import { useContext, useState } from "react";

import { CardRole, Optional, Word, WordCard } from "../../types";
import { GameMap } from "../molecules";
import { QrScanner } from "../atoms/QrScanner";
import { Button } from "../atoms/Button";

const parseRolesFromCSVString = (text: string): Array<CardRole> => {
  return text.split(",") as Array<CardRole>;
};

export function Commander() {
  const [scannedText, setScannedText] = useState<Optional<string>>(null);
  const [isMapRevealed, setIsMapRevealed] = useState<boolean>(false);

  const handleScan = (result: string) => {
    setScannedText(result);
  };

  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      <h1>Commander Page</h1>
      {!scannedText && (
        <>
          <h2>Scan the code below playing board</h2>
          <QrScanner onScanResult={setScannedText} />
        </>
      )}
      {scannedText && (
        <>
          {isMapRevealed ? (
            <GameMap rolesForRound={parseRolesFromCSVString(scannedText)} />
          ) : (
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
      )}
    </div>
  );
}
