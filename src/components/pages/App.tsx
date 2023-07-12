import { useContext, useState } from "react";

import { CardRole, Language, Word, WordCard } from "../../types";
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
        <Button onClick={() => setMode("board")}>Board Cards🕵🏼‍♂️</Button>
      )}
      {mode === "home" && (
        <Button onClick={() => setMode("map")}>Command Map 🎖️</Button>
      )}
      {mode === "board" && (
        <>
          <Board words={words} />
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom: "1em",
                marginTop: "3em",
              }}
            > */}
          <LanguageSelect
            onSelected={(language) => updateContext({ language })}
            selectedLanguage={language}
          />

          <Button onClick={setNewWords}>New Game</Button>
          <Button onClick={toggleMode}>{modeButtonLabel}</Button>
          <Button onClick={() => updateContext({ gameVariant: "duolingo" })}>
            {"duolingo"}
          </Button>
          <Button onClick={() => setMode("home")}>Back to main page</Button>
          {/* </div>
          </div> */}
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
          <Button onClick={() => setMode("home")}>Home</Button>
          <Commander />
        </>
      )}
    </>
  );
}
