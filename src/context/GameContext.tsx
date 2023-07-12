import { Context, createContext, useState } from "react";
import { GameState } from "../types";

const DEFAULT_STATE: GameState = {
  theme: "light",
  language: "english",
  startingColor: "red",
  gameVariant: "single",
};

type GameContext = {
  gameState: GameState;
  updateContext(changes: Partial<GameState>): void;
};

export const GameContext: Context<GameContext> = createContext(
  (undefined as unknown) as GameContext
); //TODO fix this type mess pls
const { Provider } = GameContext;

export function GameContextProvider(props: any) {
  const updateContext = (changes: Partial<GameState>) => {
    setContextValue((contextValue) => ({
      ...contextValue,
      gameState: { ...contextValue.gameState, ...changes },
    }));
  };

  const [contextValue, setContextValue] = useState<GameContext>({
    gameState: DEFAULT_STATE,
    updateContext,
  });

  return <Provider value={contextValue}>{props.children}</Provider>;
}
