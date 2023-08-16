import styled from "@emotion/styled";

import { mapRoleToBackgroundColor, roleToSignMap } from "../../lib/utils";
import { CardRole } from "../../types";

type Props = {
  role: CardRole;
  isRoleRevealed: boolean;
};

const StyledField = styled.div<Props>(({ isRoleRevealed, role, theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "6vh",
  height: "6vh",
  margin: "auto",
  fontSize: "1.2rem",
  boxShadow: `inset 0 0 6px ${theme.colors.map.fieldShadow}`,
  borderRadius: "6px",
  transition: "1s ease-in-out",
  color: isRoleRevealed ? theme.colors.map.text : "transparent",
  backgroundColor: isRoleRevealed
    ? mapRoleToBackgroundColor(role, theme)
    : theme.colors.card.neutral,
}));

export function GameMapField(props: Props) {
  return <StyledField {...props}>{roleToSignMap[props.role]}</StyledField>;
}
