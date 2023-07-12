import { useContext, useState } from "react";

import { CardRole, Word, WordCard } from "../../types";
import { GameContext } from "../../context/GameContext";
import { Board } from "../organisms";
import { WORD_BANK } from "../../WordBank";
import { Qr } from "../atoms/QR";
import { Commander } from "./Commander";
import { Button } from "../atoms/Button";
import { LanguageSelect } from "../atoms/LanguageSelect";

const get25RandomWords = (wordBank: Array<Word>): Array<Word> =>
  wordBank.sort(() => Math.random() - 0.5).slice(0, 25);

const assignRoles = (words: Array<Word>): Array<WordCard> => {
  const assigned = words.map((word, index) => {
    return {
      word,
      role:
        index <= 8
          ? ("red" as const)
          : index > 8 && index <= 16
          ? ("blue" as const)
          : index > 16 && index < 24
          ? ("neutral" as const)
          : ("black" as const),
    };
  });

  return assigned.sort(() => Math.random() - 0.5);
};

export function App() {
  const [mode, setMode] = useState<"board" | "home" | "map">("home");
  const {
    updateContext,
    gameState: { gameVariant, language },
  } = useContext(GameContext);
  const [words, setWords] = useState<Array<WordCard>>(
    assignRoles(get25RandomWords(WORD_BANK))
  );

  const setNewWords = () => {
    const words = assignRoles(get25RandomWords(WORD_BANK));
    setWords(words);
  };

  const toggleMode = () =>
    gameVariant === "single"
      ? updateContext({ gameVariant: "mirrored" })
      : updateContext({ gameVariant: "single" });

  const modeButtonLabel = `${
    gameVariant === "single" ? "Mirrored" : "Single"
  } mode`;
  const languageButtonLabel = `${
    language === "czech" ? "english" : "czech"
  } language`;

  const roles: Array<CardRole> = words.map(({ role }) => role);

  return (
    <>
      {mode === "home" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h1>CODE NAMES</h1>
          <div
            style={{
              display: "flex",
            }}
          >
            <Button variant="big" onClick={() => setMode("board")}>
              Board
              <img
                alt="board"
                src="../../board.png"
                style={{ width: "100px" }}
              />
            </Button>
            <Button variant="big" onClick={() => setMode("map")}>
              Map
              <img alt="map" src="../../map.png" style={{ width: "100px" }} />
            </Button>
          </div>
        </div>
      )}
      {mode === "board" && (
        <>
          <Board words={words} />
          <div
            style={{
              marginTop: "2em",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button onClick={setNewWords}>New Game</Button>
            <LanguageSelect
              onSelected={(language) => updateContext({ language })}
              selectedLanguage={language}
            />
            <Button onClick={toggleMode}>{modeButtonLabel}</Button>
            <Button onClick={() => updateContext({ gameVariant: "duolingo" })}>
              Duolingo
            </Button>
            <Button onClick={() => setMode("home")}>Back to main page</Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2em",
              marginBottom: "4em",
            }}
          >
            <Qr text={roles.toString()} />
          </div>
        </>
      )}
      {mode === "map" && (
        <>
          <Button onClick={() => setMode("home")}>Back to main page</Button>
          <Commander />
        </>
      )}
    </>
  );
}
