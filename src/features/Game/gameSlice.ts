import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getNewWordCardSet } from "../../lib/utils";
import { RootState } from "../../redux/store";
import {
  GameVariant,
  Language,
  Optional,
  TeamColor,
  WordCard
} from "../../types";
import { FIRST_TEAM_CARD_COUNT, SECOND_TEAM_CARD_COUNT } from "./constants";

export type GameState = {
  language: Language;
  variant: GameVariant;
  wordCards: Array<WordCard>;
  isFinished: boolean;
  winner: Optional<TeamColor>;
  score: { [key in TeamColor]: number };
  startingColor: TeamColor;
};

const initialState: GameState = {
  language: "czech",
  variant: "single", // TODO: unify manimg, "mode" elsewhere
  wordCards: [],
  isFinished: false,
  winner: null,
  score: { red: 0, blue: 0 },
  startingColor: "red",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeGameLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    setIsFinished: (state, action: PayloadAction<boolean>) => {
      state.isFinished = action.payload;
    },
    setWinner: (state, action: PayloadAction<Optional<TeamColor>>) => {
      state.winner = action.payload;
    },
    setStartingColor: (state, action: PayloadAction<TeamColor>) => {
      state.startingColor = action.payload;
    },
    changeGameVariant: (state, action: PayloadAction<GameVariant>) => {
      state.variant = action.payload;
    },
    generateWordCards: (state) => {
      state.wordCards = getNewWordCardSet();
    },
    // updateScore: (state, action: PayloadAction<{ id: string }>) => {
    //   state.wordCards = state.wordCards.map((wordCard) => {
    //     if (wordCard.id === action.payload.id) {
    //       return { ...wordCard, isRoleRevealed: true };
    //     }
    //     return wordCard;
    //   });
    // },
    updateScore: (
      state,
      { payload: { role } }: PayloadAction<{ role: TeamColor }>
    ) => {
      state.score[role] += 1;
      const secondTeam = state.startingColor === "red" ? "blue" : "red";

      //TODO: move to thunk
      if (state.score[state.startingColor] === FIRST_TEAM_CARD_COUNT) {
        state.winner = state.startingColor;
        state.isFinished = true;
      } else if (state.score[secondTeam] === SECOND_TEAM_CARD_COUNT) {
        state.winner = secondTeam;
        state.isFinished = true;
      }
    },
    restartGame: (state) => {
      state.isFinished = false;
      state.winner = null;
      state.wordCards = getNewWordCardSet();
      state.score = { red: 0, blue: 0 };
    },
  },
});

export const {
  changeGameLanguage,
  changeGameVariant,
  updateScore,
  generateWordCards,
  setIsFinished,
  setWinner,
  restartGame,
  setStartingColor,
} = gameSlice.actions;

export const selectGameState = (state: RootState) => state.game;
export const selectLanguage = (state: RootState) => state.game.language;
export const selectVariant = (state: RootState) => state.game.variant;
export const selectWordCards = (state: RootState) => state.game.wordCards;
export const selectIsFinished = (state: RootState) => state.game.isFinished;
export const selectWinner = (state: RootState) => state.game.winner;
export const selectStartingColor = (state: RootState) =>
  state.game.startingColor;
export const selectRolesInBase64CSVString = (state: RootState) =>
  btoa(state.game.wordCards.map(({ role }) => role).toString());

export default gameSlice.reducer;
