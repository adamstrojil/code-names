import { mapRoleToSign, mapRoleToStyles } from "../../lib/utils";
import { CardRole } from "../../types";

type Props = {
  role: CardRole;
  isRoleRevealed: boolean;
};

const fieldStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "6vh",
  height: "6vh",
  margin: "auto",
  fontSize: "1.5rem",
  boxShadow: "inset 0 0 6px #000000",
  borderRadius: "6px",
  transition: "1s ease-in-out",
};

export function GameMapField({ role, isRoleRevealed }: Props) {
  return (
    <div
      style={{
        ...mapRoleToStyles(role, isRoleRevealed),
        ...fieldStyle,
        color: isRoleRevealed ? "white" : "transparent",
      }}
    >
      {mapRoleToSign[role]}
    </div>
  );
}
