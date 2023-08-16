import styled from "@emotion/styled";

export const Button = styled.button(({ theme }) => ({
  fontFamily: '"Outfit", sans-serif',
  borderRadius: "5px",
  backgroundColor: theme.colors.buttonBackground,
  color: theme.colors.text,
  border: "none",
  cursor: "pointer",
  padding: "16px 16px",
  textAlign: "center",
  display: "inline-block",
  fontSize: "16px",
}));
