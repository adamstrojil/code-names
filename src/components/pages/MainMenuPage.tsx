import { MainMenuLink } from "../atoms";

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
        <MainMenuLink to="/board" imgSrc="../../board.png" label="Board" />
        <MainMenuLink to="/map" imgSrc="../../map.png" label="Map" />
      </div>
    </div>
  );
}
