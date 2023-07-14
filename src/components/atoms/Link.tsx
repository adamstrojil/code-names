import { Link as BaseLink, LinkProps } from "react-router-dom";

const style = {
  backgroundColor: "#efefef",
  borderRadius: "5px",
  color: "black",
  border: "none",
  textAlign: "center" as "center",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px 16px",
  cursor: "pointer",
  outline: "none",
  padding: "16px",
  textDecoration: "none"
};

export function Link({ ...rest }: LinkProps) {
  return <BaseLink style={style} {...rest} />;
}
