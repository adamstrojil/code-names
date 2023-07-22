import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)({
  backgroundColor: "#efefef",
  borderRadius: "5px",
  color: "black",
  border: "none",
  display: "inline-block",
  fontSize: "16px",
  cursor: "pointer",
  outline: "none",
  padding: "16px",
  textDecoration: "none",
});
