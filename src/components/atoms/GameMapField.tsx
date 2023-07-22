import styled from "@emotion/styled";

import { roleToSignMap, roleToBackgroundColorMap } from "../../lib/utils";
import { CardRole } from "../../types";

type Props = {
  role: CardRole;
  isRoleRevealed: boolean;
};

const StyledField = styled.div(({ isRoleRevealed, role }: Props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "6vh",
  height: "6vh",
  margin: "auto",
  fontSize: "1.2rem",
  boxShadow: "inset 0 0 6px #000000",
  borderRadius: "6px",
  transition: "1s ease-in-out",
  color: isRoleRevealed ? "#eeeeeeee" : "transparent",
  backgroundColor: isRoleRevealed ? roleToBackgroundColorMap[role] : "white",
}));

export function GameMapField(props: Props) {
  return <StyledField {...props}>{roleToSignMap[props.role]}</StyledField>;
}
