type Props = {
  word: string;
  isBold?: boolean;
  isMirrored?: boolean;
  showBackground?: boolean;
};

export function Word({ word, isBold = false, isMirrored = false, showBackground = false }: Props) {
  const style = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    backgroundColor: showBackground ? "white" : "transparent",
    borderRadius: "4px",
    paddingTop: showBackground ? "4px" : "undefined",
    paddingBottom: showBackground ? "8px" : "undefined",
    marginTop: showBackground ? "4px" : "undefined",
    fontWeight: isBold ? ("bolder" as const) : ("normal" as const),
    transform: isMirrored ? "rotate(180deg)" : "none" 
  };

  return <span style={style}>{word}</span>;
}
