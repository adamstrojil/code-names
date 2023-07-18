import styled from "@emotion/styled";
import { ReactNode } from "react";

import { Link } from "../atoms";

type Props = {
  to: string;
  children: ReactNode;
};

const ContentContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  gap: "10px",
});

export function MainMenuLink({ to, children }: Props) {
  return (
    <Link to={to}>
      <ContentContainer>{children}</ContentContainer>
    </Link>
  );
}
