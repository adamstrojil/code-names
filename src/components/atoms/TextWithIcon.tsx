import styled, { CSSObject } from "@emotion/styled";
import { ElementType } from "react";

import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  text: string;
  iconPlacement?: "left" | "right";
  gap?: string;
  css?: CSSObject;
  as?: ElementType;
};

const StyledSpan = styled.span<Partial<Props>>(({ gap, theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap,
  color: theme.colors.text,
}));

export function TextWithIcon({
  text,
  icon: Icon,
  iconPlacement = "right",
  gap = "2px",
  ...rest
}: Props) {
  return (
    <StyledSpan gap={gap} {...rest}>
      {iconPlacement === "left" && <Icon />}
      <span>{text}</span>
      {iconPlacement === "right" && <Icon />}
    </StyledSpan>
  );
}
