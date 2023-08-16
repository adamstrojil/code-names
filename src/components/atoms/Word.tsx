import styled from "@emotion/styled";

type Props = {
  word: string;
  isBold?: boolean;
  isMirrored?: boolean;
  showBackground?: boolean;
};

const StyledSpan = styled.span<Props>(
  ({ showBackground, isBold, isMirrored, theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2vw",
    borderRadius: "4px",
    fontFamily: '"Outfit", sans-serif',
    textTransform: "capitalize",
    fontWeight: isBold ? 500 : 200,
    transform: isMirrored ? "rotate(180deg)" : undefined,
    ...(showBackground
      ? {
          backgroundColor: theme.colors.card.textBackground,
          marginTop: "4px",
          padding: "4px 0px 8px 0px",
        }
      : {
          padding: showBackground === false ? "4px 0px 8px 0px" : 0,
          marginTop: "4px",
        }),
  })
);

export function Word(props: Props) {
  return <StyledSpan {...props}>{props.word}</StyledSpan>;
}
