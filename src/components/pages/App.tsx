import { ThemeProvider } from "@emotion/react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "../../theme/theme";
import { Button, TextWithIcon } from "../atoms";
import { BoardPage, MainMenuPage, MapPage } from "../pages";
import { BsMoonStars, BsSun } from "react-icons/bs";

export function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.style.cssText += `background-color:${theme.colors.gameBackground}`;
  }, [theme]);

  const { toggleTheme, themeName } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={toggleTheme}>
        <TextWithIcon
          iconPlacement="left"
          gap="8px"
          icon={themeName === "light" ? BsMoonStars : BsSun}
          text={`${themeName === "light" ? "Dark" : "Light"} theme`}
        />
      </Button>
      <Routes>
        <Route path="/" element={<MainMenuPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="*" element={<MainMenuPage />} />
      </Routes>
    </ThemeProvider>
  );
}
