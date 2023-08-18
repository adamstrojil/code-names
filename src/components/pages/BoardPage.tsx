/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { useState } from "react";

import { RxInfoCircled } from "react-icons/rx";
import { getNewWordCardSet } from "../../lib/utils";
import { WordCard } from "../../types";
import { QrCode, TextWithIcon } from "../atoms";
import { Board, OptionsMenu } from "../organisms";

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

        {/* <Box mt="1rem" display="flex" gap="8px"> */}
          {/* <Link to={"/"}>
            <TextWithIcon
              icon={IoIosArrowBack}
              text="Main menu"
              iconPlacement="left"
              gap="2px"
            />
          </Link> */}
          {/* <Link to={"/map"}>
            <TextWithIcon text="Scan map" icon={BiQrScan} />
          </Link> */}
        {/* </Box> */}
      </QrSectionContainer>
    </>
  );
}
