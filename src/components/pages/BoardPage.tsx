import styled from "@emotion/styled";
import { useState } from "react";
import { BiQrScan } from "react-icons/bi";

import { getNewWordCardSet } from "../../lib/utils";
import { WordCard } from "../../types";
import { Link, QrCode, TextWithIcon } from "../atoms";
import { Board, OptionsMenu } from "../organisms";

const QrSectionContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "2em",
  marginBottom: "4em",
  gap: "20px",
});

export function BoardPage() {
  const [words, setWords] = useState<Array<WordCard>>(getNewWordCardSet());
  const rolesInCSVString = words.map(({ role }) => role).toString();

  return (
    <>
      <Board words={words} />
      <OptionsMenu setWords={setWords} />
      <QrSectionContainer>
        <QrCode text={rolesInCSVString} />
        <Link to={"/map"}>
          <TextWithIcon text="Scan map" icon={BiQrScan} />
        </Link>
      </QrSectionContainer>
    </>
  );
}
