import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import appReducer from "../features/App/appSlice";
import gameReducer from "../features/Game/gameSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    game: gameReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
