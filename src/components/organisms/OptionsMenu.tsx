import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { getNewWordCardSet } from "../../lib/utils";
import { WordCard } from "../../types";
import { Button } from "../atoms";
import { GameModeSelect, LanguageSelect } from "../molecules";
import { Link } from "react-router-dom";

type Props = {
  setWords: (words: Array<WordCard>) => void;
};

export function OptionsMenu({ setWords }: Props) {
  const {
    updateContext,
    gameState: { gameVariant, language },
  } = useContext(GameContext);
  return (
    <>
      <div
        style={{
          marginTop: "2em",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button onClick={() => setWords(getNewWordCardSet())}>
          New Words &#x21bb;
        </Button>
        <LanguageSelect
          onSelected={(language) => updateContext({ language })}
          selectedLanguage={language}
        />
        <GameModeSelect
          onSelected={(gameVariant) => updateContext({ gameVariant })}
          selectedMode={gameVariant}
        />
      </div>
    </>
  );
}
