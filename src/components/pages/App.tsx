import { useContext, useEffect, useState } from "react";

import { Language, WordCard } from "../../types";
import { mapLanguageToWordBank } from "../../lib/utils";
import { GameContext } from "../../context/GameContext";
import { Board } from "../organisms";
import { GameMap } from "../molecules";

const get25RandomWords = (wordBank: Array<string>): Array<string> =>
  wordBank
    .sort(() => Math.random() - 0.5)
    .slice(0, 25)
    .map((word) => word.toUpperCase());

const assignRoles = (words: Array<string>): Array<WordCard> => {
  const assigned = words.map((word, index) => {
    return {
      word,
      role:
        index <= 8
          ? ("red" as "red")
          : index > 8 && index <= 16
          ? ("blue" as "blue")
          : index > 16 && index < 24
          ? ("neutral" as "neutral")
          : ("black" as "black"),
    };
  });

  return assigned.sort(() => Math.random() - 0.5);
};

const buttonStyle = {
  borderRadius: "5px",
  backgroundColor: "white",
  color: "black",
  border: "2px solid #bca785",
  padding: "16px 16px",
  textAlign: "center" as "center",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px 16px 2px",
  cursor: "pointer",
  outline: "none",
};

export function App() {
  const {
    updateContext,
    gameState: { gameVariant },
  } = useContext(GameContext);
  const [language, setLanguage] = useState<Language>("CZE");
  const [words, setWords] = useState<any>(
    assignRoles(get25RandomWords(mapLanguageToWordBank[language]))
  );

  useEffect(() => {
    setNewWords();
  }, [language]);

  const setNewWords = () => {
    const words = assignRoles(
      get25RandomWords(mapLanguageToWordBank[language])
    );
    setWords(words);
  };

  const toggleMode = () =>
    gameVariant === "single"
      ? updateContext({ gameVariant: "mirrored" })
      : updateContext({ gameVariant: "single" });

  const toggleLanguage = () => {
    language === "CZE" ? setLanguage("EN") : setLanguage("CZE");
  };

  const modeButtonLabel = `${
    gameVariant === "single" ? "Mirrored" : "Single"
  } mode`;
  const languageButtonLabel = `${language === "CZE" ? "EN" : "CZE"} language`;

  return (
    <>
      <Board words={words} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <GameMap wordsForRound={words} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <button
            style={{ ...buttonStyle, marginRight: "16px" }}
            onClick={setNewWords}
          >
            New Game
          </button>
          <button style={buttonStyle} onClick={toggleMode}>
            {modeButtonLabel}
          </button>
          <button style={buttonStyle} onClick={toggleLanguage}>
            {languageButtonLabel}
          </button>
        </div>
      </div>
    </>
  );
}
