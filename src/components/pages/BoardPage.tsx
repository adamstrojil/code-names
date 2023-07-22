/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { useState } from "react";
import { BiQrScan } from "react-icons/bi";

import { getNewWordCardSet } from "../../lib/utils";
import { WordCard } from "../../types";
import { Link, QrCode, TextWithIcon } from "../atoms";
import { Board, OptionsMenu } from "../organisms";
import { RxInfoCircled } from "react-icons/rx";

const QrSectionContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "48px",
  marginBottom: "64px",
  gap: "16px",
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
        <TextWithIcon
          css={{ fontSize: "0.9rem" }}
          text={"Currently only scanner from this page is supported."}
          icon={RxInfoCircled}
          iconPlacement="left"
        />
        <Link to={"/map"}>
          <TextWithIcon text="Scan map" icon={BiQrScan} />
        </Link>
      </QrSectionContainer>
    </>
  );
}
