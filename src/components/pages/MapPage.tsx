import { useState } from "react";
import { Optional } from "../../types";

import { parseRolesFromCSVString } from "../../lib/utils";
import { Button, QrScanner, Link } from "../atoms";
import { GameMap } from "../molecules";

export function MapPage() {
  const [scannedText, setScannedText] = useState<Optional<string>>(null);
  const [isMapRevealed, setIsMapRevealed] = useState<boolean>(false);

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        marginTop: "10px",
      }}
    >
      {scannedText ? (
        <>
          <Link to={"/"}>Main menu</Link>

          <GameMap
            isBlurred={!isMapRevealed}
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
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <span>New scan</span>
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="invisible_box" data-name="invisible box">
                    <rect width="48" height="48" fill="none" />
                  </g>
                  <g id="Health_Icons" data-name="Health Icons">
                    <g>
                      <path d="M6,18a2,2,0,0,0,2-2V8h8a2,2,0,0,0,0-4H8A4,4,0,0,0,4,8v8A2,2,0,0,0,6,18Z" />
                      <path d="M40,4H32a2,2,0,0,0,0,4h8v8a2,2,0,0,0,4,0V8A4,4,0,0,0,40,4Z" />
                      <path d="M42,30a2,2,0,0,0-2,2v8H32a2,2,0,0,0,0,4h8a4,4,0,0,0,4-4V32A2,2,0,0,0,42,30Z" />
                      <path d="M16,40H8V32a2,2,0,0,0-4,0v8a4,4,0,0,0,4,4h8a2,2,0,0,0,0-4Z" />
                      <path d="M42,22H6a2,2,0,0,0,0,4H42a2,2,0,0,0,0-4Z" />
                    </g>
                  </g>
                </g>
              </svg>
            </span>
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
    </div>
  );
}
