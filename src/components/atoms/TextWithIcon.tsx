import styled from "@emotion/styled";

import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  text: string;
  iconPlacement?: "left" | "right";
};

const StyledSpan = styled.span({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "2px",
});

export function TextWithIcon({
  text,
  icon: Icon,
  iconPlacement = "right",
}: Props) {
  return (
    <StyledSpan>
      {iconPlacement === "left" && <Icon />}
      <span>{text}</span>
      {iconPlacement === "right" && <Icon />}
    </StyledSpan>
  );
}
