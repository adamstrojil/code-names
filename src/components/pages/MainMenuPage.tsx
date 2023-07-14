import { useContext } from "react";

import { GameContext } from "../../context/GameContext";
import { Button } from "../atoms";

export function MainMenuPage() {
  const { updateContext } = useContext(GameContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>CODE NAMES</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button variant="big" onClick={() => updateContext({ page: "board" })}>
          Board
          <img alt="board" src="../../board.png" style={{ width: "150px" }} />
        </Button>
        <Button variant="big" onClick={() => updateContext({ page: "map" })}>
          Map
          <img alt="map" src="../../map.png" style={{ width: "150px" }} />
        </Button>
      </div>
    </div>
  );
}
