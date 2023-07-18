import styled from "@emotion/styled";

import { ReactElement } from "react";

type Props = {
  icon: ReactElement;
  text: string;
};

const StyledSpan = styled.span({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
});

export function TextWithIcon({ text, icon }: Props) {
  return (
    <StyledSpan>
      <span>{text}</span>
      {icon}
    </StyledSpan>
  );
}
