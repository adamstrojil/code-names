import { ReactNode, useContext, useState } from "react";

import { Page } from "../../types";

import { MainMenuPage, BoardPage, MapPage } from "../pages";
import { GameContext } from "../../context/GameContext";

export function App() {
  const { page } = useContext(GameContext).gameState;

  const modeToPageMap: { [key in Page]: ReactNode } = {
    mainMenu: <MainMenuPage/>,
    board: <BoardPage/>,
    map: <MapPage/>,
  };

  return modeToPageMap[page];
}
