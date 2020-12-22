import React, { useState } from "react";

import "./App.css";
import { Board } from "./Board";
import { GameKey } from "./GameKey";
import { TopBar } from "./TopBar";
import { GameVariant, WordCard } from "./types";

const wordsList = [
  "react",
  "couch",
  "table",
  "chimney",
  "spoon",
  "pillow",
  "czechia",
  "light",
  "lighter",
  "bluebird",
  "towel",
  "hoodie",
  "rice",
  "tokio",
  "computer",
  "candle",
  "tv",
  "fish",
  "sushi",
  "door",
  "owen",
  "lover",
  "sleep",
  "tank",
  "student",
  "netflix",
  "stopwatch",
  "app",
  "photo",
];

const get25Words = (wordslist: Array<string>): Array<string> => {
  const shuffledWordsList = wordslist.sort(() => Math.random() - 0.5);
  const result = shuffledWordsList
    .filter((_word, index) => index < 25)
    .map((word) => word.toUpperCase());
  return result;
};

const assignRoles = (words: Array<string>): Array<WordCard> => {
  return words.map((word, index) => {
    return {
      word,
      roleRevealed: false,
      role:
        index <= 8
          ? "red"
          : index > 8 && index <= 16
          ? "blue"
          : index > 16 && index < 24
          ? "neutral"
          : "black",
    };
  });
};

function App() {
  const [gameMode, setGameMode] = useState<GameVariant>("single");

  const wordsForRound: Array<WordCard> = assignRoles(
    get25Words(wordsList)
  ).sort(() => Math.random() - 0.5);

  const toggleMode = () =>
    gameMode === "single" ? setGameMode("mirrored") : setGameMode("single");

  return (
    <>
      <TopBar toggleMode={toggleMode} gameMode={gameMode} />
      <Board words={wordsForRound} gameVariant={gameMode} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <GameKey wordsForRound={wordsForRound} />
      </div>
    </>
  );
}

export default App;
