import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "../../theme/theme";
import { BoardPage, MainMenuPage, MapPage } from "../pages";

export function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<MainMenuPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="*" element={<MainMenuPage />} />
      </Routes>
    </ThemeProvider>
  );
}
