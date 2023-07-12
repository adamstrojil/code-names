import React, { Children, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const style = {
  borderRadius: "5px",
  backgroundColor: "white",
  color: "black",
  border: "2px solid #bca785",
  padding: "16px 16px",
  textAlign: "center" as "center",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px 16px 2px",
  cursor: "pointer",
  outline: "none",
};

export function Button({ children, onClick }: Props) {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
