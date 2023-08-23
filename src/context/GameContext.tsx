import { Context, ReactNode, createContext, useState } from "react";
import { GameState } from "../types";

const DEFAULT_STATE: GameState = {
  theme: "light",
  language: "czech",
  startingColor: "red", //TODO not implemented yet 
  gameVariant: "single",
};

type GameContextType = {
  gameState: GameState;
  updateContext(changes: Partial<GameState>): void;
};

export const GameContext: Context<GameContextType> = createContext(
  (undefined as unknown) as GameContextType
); //TODO fix this type mess pls
const { Provider } = GameContext;

export function GameContextProvider(props: { children: ReactNode }) {
  const updateContext = (changes: Partial<GameState>) => {
    setContextValue((contextValue) => ({
      ...contextValue,
      gameState: { ...contextValue.gameState, ...changes },
    }));
  };

  const [contextValue, setContextValue] = useState<GameContextType>({
    gameState: DEFAULT_STATE,
    updateContext,
  });

  return <Provider value={contextValue}>{props.children}</Provider>;

}
