/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { useState } from "react";
import { BiQrScan } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { parseRolesFromCSVString } from "../../lib/utils";
import { Optional } from "../../types";
import { Box, Button, Link, QrScanner, TextWithIcon } from "../atoms";
import { GameMap, ThemeButton } from "../molecules";
import { useTheme } from "../../theme/theme";

const MapPageContainer = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  // marginTop: "10px",
});

const HomepageLink = () => (
  <Link to={"/"}>
    <TextWithIcon
      icon={IoIosArrowBack}
      text="Main menu"
      iconPlacement="left"
      gap="2px"
    />
  </Link>
);

export function MapPage() {
  const [scannedText, setScannedText] = useState<Optional<string>>(null);
  const [isMapRevealed, setIsMapRevealed] = useState<boolean>(false);
  const { theme } = useTheme();

  const scannedRoles = scannedText ? parseRolesFromCSVString(scannedText) : [];

  return (
    <MapPageContainer>
      <Box mb="32px">
        <ThemeButton />
      </Box>
      {scannedRoles.length ? (
        <>
          <GameMap isMapRevealed={isMapRevealed} rolesForRound={scannedRoles} />
          {isMapRevealed ? (
            <Button
              onClick={() => {
                setScannedText(null);
                setIsMapRevealed(false);
              }}
            >
              <TextWithIcon text="New scan" icon={BiQrScan} />
            </Button>
          ) : (
            <>
              {/* TODO: Will be a separate Text atom component */}
              <Box as="h2" css={{ color: "green", fontWeight: 300 }}>
                Map Ready!
              </Box>
              <Button onClick={() => setIsMapRevealed(true)}>Reveal Map</Button>
            </>
          )}
        </>
      ) : (
        <>
          {/* TODO: Will be a separate Text atom component */}
          <Box as="h2" css={{ fontWeight: 300, color: theme.colors.text }}>
            Scan the code from board
          </Box>
          <QrScanner onScanResult={setScannedText} />
          <Box mt="1rem" display="flex" gap="8px">
            <HomepageLink />
          </Box>
        </>
      )}
    </MapPageContainer>
  );
}
