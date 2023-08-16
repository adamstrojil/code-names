import styled from "@emotion/styled";

export const Line = styled.hr(({ theme }) => ({
  width: "90%",
  borderTop: `1px solid ${theme.colors.card.line}`,
  borderBottom: "0px",
  borderLeft: "0px",
  borderRight: "0px",
  margin: 0,
}));
