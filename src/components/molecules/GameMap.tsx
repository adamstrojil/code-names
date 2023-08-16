import styled from "@emotion/styled";
import { CardRole } from "../../types";
import { GameMapField } from "../atoms";

type Props = {
  isMapRevealed: boolean;
  rolesForRound: Array<CardRole>;
};

export const MapContainer = styled.div(({theme})=>({
  width: "34vh",
  height: "34vh",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  border: "15px solid black",
  borderRadius: "12px",
  backgroundColor: "black",
  marginBottom: "32px",
  marginTop: "16px",
  boxShadow: `0 0 0 4px ${theme.colors.map.border}`,
}));

export function GameMap({ rolesForRound, isMapRevealed }: Props) {
  return (
    <MapContainer>
      {rolesForRound.map((role, index) => (
        <GameMapField key={index} role={role} isRoleRevealed={isMapRevealed} />
      ))}
    </MapContainer>
  );
}
