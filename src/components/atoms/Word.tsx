import styled from "@emotion/styled";

type Props = {
  word: string;
  isBold?: boolean;
  isMirrored?: boolean;
  showBackground?: boolean;
};

const StyledSpan = styled.span<Props>(
  {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2vw",
    borderRadius: "4px",
    fontFamily: '"Outfit", sans-serif',
    textTransform: "capitalize",
  },
  ({ showBackground, isBold, isMirrored }) => ({
    fontWeight: isBold ? 500 : 200,
    transform: isMirrored ? "rotate(180deg)" : undefined,
    ...(showBackground
      ? {
          backgroundColor: "white",
          marginTop: "4px",
          padding: "4px 0px 8px 0px",
        }
      : {}),
  })
);

export function Word(props: Props) {
  return <StyledSpan {...props}>{props.word}</StyledSpan>;
}
