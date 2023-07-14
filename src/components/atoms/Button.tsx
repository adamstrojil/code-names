import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const style = {
  borderRadius: "5px",
  backgroundColor: "#efefef",
  color: "black",
  border: "none",
  cursor: "pointer",
  padding: "16px 16px",
  textAlign: "center" as const,
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px 16px 2px",
};

export function Button({ children, onClick }: Props) {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
