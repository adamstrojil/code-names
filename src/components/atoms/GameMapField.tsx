import { mapRoleToSign, mapRoleToStyles } from "../../lib/utils";
import { CardRole } from "../../types";

type Props = {
  role: CardRole;
};

const fieldStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "6vh",
  height: "6vh",
  margin: "auto",
  fontSize: "25px",
  color: "#FFFFFFAA",
  boxShadow: "inset 0 0 6px #000000",
  borderRadius: "6px",
};

export function GameMapField({ role }: Props) {
  return (
    <div style={{ ...fieldStyle, ...mapRoleToStyles(role) }}>
      {mapRoleToSign[role]}
    </div>
  );
}
