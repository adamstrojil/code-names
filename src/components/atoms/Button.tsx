import { ReactNode } from "react";
import { ButtonVariant } from "../../types";

type Props = {
  variant?: ButtonVariant;
  children: ReactNode;
  onClick: () => void;
};

const baseStyle = {
  borderRadius: "5px",
  backgroundColor: "white",
  color: "black",
  border: "2px solid #bca785",
  cursor: "pointer",
  outline: "none",
};
 
const mapVariantToStyle = {
  normal: {
    ...baseStyle,
    padding: "16px 16px",
    textAlign: "center" as const,
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px 16px 2px",
  },
  big: {
    ...baseStyle,
    height: "150px",
    width: "150px",
    marginRight: "10px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
};

export function Button({ children, variant = "normal", onClick }: Props) {
  return (
    <button onClick={onClick} style={mapVariantToStyle[variant]}>
      {children}
    </button>
  );
}
