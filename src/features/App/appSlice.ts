import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ThemeName } from "../../theme/theme";
import { RootState } from "../../redux/store";

export type AppState = {
  theme: ThemeName;
  //language: Language //FUTURE FEATURE i18n
};

const initialState: AppState = {
  theme: "light",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeName>) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = appSlice.actions;

export const selectTheme = (state: RootState) => state.app.theme;

export default appSlice.reducer;
