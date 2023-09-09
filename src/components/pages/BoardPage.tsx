/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { useEffect } from "react";
import { RxInfoCircled } from "react-icons/rx";

import {
  generateWordCards,
  selectRolesInCSVString,
  selectWordCards,
} from "../../features/Game/gameSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(generateWordCards());
  }, []);

  const rolesInCSVString = useAppSelector(selectRolesInCSVString);

  return (
    <>
      <Board />
      <OptionsMenu />
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
