import { BiQrScan } from "react-icons/bi";
import boardImg from "../../assets/board.png";
import mapImg from "../../assets/map.png";
import { MainMenuLink, TextWithIcon } from "../atoms";
import styled from "@emotion/styled";

const CenteredContainer = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const MainMenuLinkGroup = styled.div({
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  justifyContent: "center",
});

export function MainMenuPage() {
  return (
    <CenteredContainer>
      <MainMenuLinkGroup>
        <MainMenuLink to="/board">
          <>
            Show board
            <img aria-hidden alt="" src={boardImg} style={{ width: "150px" }} />
          </>
        </MainMenuLink>
        <MainMenuLink to="/map">
          <>
            <TextWithIcon text="Scan map" icon={<BiQrScan />} />
            <img aria-hidden alt="" src={mapImg} style={{ width: "150px" }} />
          </>
        </MainMenuLink>
      </MainMenuLinkGroup>
    </CenteredContainer>
  );
}
