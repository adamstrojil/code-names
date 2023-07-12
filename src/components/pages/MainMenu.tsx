import { useState } from "react";

export function MainMenu() {
  const [view, setView] = useState<"board" | "home" | "map">("home");

  return (
    <>
      {view === "home" ? (
        <>
          <button onClick={() => setView("board")}>Player</button>
          <button onClick={() => setView("map")}>Command</button>
        </>
      ) : (
        <button onClick={() => setView("home")}>Home</button>
      )}

      {view === "board" && ""}
      {view === "map" && ""}

    </>
  );
}
