import { useEffect, useRef } from "react";
import { CardRole } from "../../types";
import { GameMapField } from "../atoms";

type Props = {
  isBlurred: boolean;
  rolesForRound: Array<CardRole>;
};

const mapStyle = {
  width: "34vh",
  height: "34vh",
  display: "flex",
  flexWrap: "wrap" as "wrap",
  justifyContent: "space-around",
  border: "15px solid black",
  borderRadius: "12px",
  backgroundColor: "black",
  marginBottom: "32px",
  marginTop: "16px",
  boxShadow: "0 0 0 5px #bca785",
  transition: "filter 0.5s ease-in-out",
};

export function GameMap({ rolesForRound, isBlurred }: Props) {
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(
    function removeBlurFilter() {
      if (componentRef.current && !isBlurred) {
        componentRef.current.style.filter = "none";
      }
    },
    [isBlurred]
  );

  const map = (
    <div
      style={{
        ...mapStyle,
        filter: `blur(${isBlurred ? 100 : 0}px)`,
      }}
      ref={componentRef}
    >
      {rolesForRound.map((role, index) => (
        <GameMapField key={index} role={role} />
      ))}
    </div>
  );

  return map;
}
