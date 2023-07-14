import { Link } from "react-router-dom";

type Props = {
  to: string;
  imgSrc: string;
  label: string;
};

const style = {
  borderRadius: "5px",
  backgroundColor: "white",
  color: "black",
  border: "2px solid #bca785",
  cursor: "pointer",
  height: "200px",
  width: "200px",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "space-evenly",
  textDecoration: "none",
};

export function MainMenuLink({ label, imgSrc, to }: Props) {
  return (
    <Link to={to} style={style}>
      {label}
      <img aria-hidden src={imgSrc} style={{ width: "150px" }} />
    </Link>
  );
}
