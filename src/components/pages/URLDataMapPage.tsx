/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { parseRolesFromCSVString } from "../../lib/utils";
import { Box, Button, TextWithIcon, Link } from "../atoms";
import { GameMap, ThemeButton } from "../molecules";
import { BiQrScan } from "react-icons/bi";

const MapPageContainer = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export function URLDataMapPage() {
  const [isMapRevealed, setIsMapRevealed] = useState<boolean>(false);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const parsedText = queryParams.get("data");
  const parsedRoles = parsedText
    ? parseRolesFromCSVString(atob(parsedText))
    : [];

  return (
    <MapPageContainer>
      <Box mb="32px">
        <ThemeButton />
      </Box>
      {parsedRoles.length ? (
        <>
          <GameMap isMapRevealed={isMapRevealed} rolesForRound={parsedRoles} />
          {!isMapRevealed ? (
            <>
              <Box as="h2" css={{ color: "green", fontWeight: 300 }}>
                Map Ready!
              </Box>
              <Button onClick={() => setIsMapRevealed(true)}>Reveal Map</Button>
            </>
          ) : (
            <Link to={"/map"}>
              <TextWithIcon
                icon={BiQrScan}
                text="New Scan"
              />
            </Link>
          )}
        </>
      ) : (
        <Box>
          There has been an error while scanning the map. Please try using our{" "}
          <Link to={"/map"}>scanner.</Link>
        </Box>
      )}
    </MapPageContainer>
  );
}
