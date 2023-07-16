import { MainMenuLink } from "../atoms";
import boardImg from "../../assets/board.png";
import mapImg from "../../assets/map.png";

export function MainMenuPage() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <MainMenuLink to="/board" imgSrc={boardImg} label="Board" />
        <MainMenuLink to="/map" imgSrc={mapImg} label="Map" />
      </div>
    </div>
  );
}
