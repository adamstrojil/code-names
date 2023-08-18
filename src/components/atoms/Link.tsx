import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)(({theme})=>({
  backgroundColor: theme.colors.buttonBackground,
  borderRadius: "5px",
  color: theme.colors.text,
  transition: "1s",
  border: "none",
  display: "inline-block",
  fontSize: "16px",
  cursor: "pointer",
  outline: "none",
  padding: "16px",
  textDecoration: "none",
}));
