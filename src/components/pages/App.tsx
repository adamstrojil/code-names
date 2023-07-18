import { Route, Routes } from "react-router-dom";
import { BoardPage, MainMenuPage, MapPage } from "../pages";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainMenuPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/board" element={<BoardPage />} />
      <Route path="*" element={<MainMenuPage />} />
    </Routes>
  );
}
