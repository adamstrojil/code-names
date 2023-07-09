import React, { Context, createContext, useState } from "react";
import { GameState } from "../types";

const DEFAULT_STATE: GameState = {
  theme: "light",
  language: "CZE",
  startingColor: "red",
  gameVariant: "single",
};

type GameContext = {
  gameState: GameState,
  updateContext(changes: Partial<GameState>): void,
}

export const GameContext: Context<any> = createContext(undefined);
const { Provider } = GameContext

export function GameContextProvider(props: any) {
  
  const updateContext = (changes: any) => {
    setContextValue({...contextValue, gameState: {...contextValue.gameState, ...changes}})
  }
  
  const [contextValue, setContextValue] = useState<GameContext>({
    gameState: DEFAULT_STATE,
    updateContext
  })

  return (
    <Provider value={contextValue}>
      {props.children}
    </Provider>
  )
}