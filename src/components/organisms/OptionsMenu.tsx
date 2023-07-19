import { useContext } from "react";
import { MdOutlineRestartAlt } from "react-icons/md";

import { GameContext } from "../../context/GameContext";
import { getNewWordCardSet } from "../../lib/utils";
import { WordCard } from "../../types";
import { Box, Button, TextWithIcon } from "../atoms";
import { GameModeSelect, LanguageSelect } from "../molecules";

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
      <Box mt="2em" display="flex" justifyContent="center">
        <Button onClick={() => setWords(getNewWordCardSet())}>
          <TextWithIcon
            text="New Game"
            icon={MdOutlineRestartAlt}
            iconPlacement="left"
          />
        </Button>
        <LanguageSelect
          onSelected={(language) => updateContext({ language })}
          selectedLanguage={language}
        />
        <GameModeSelect
          onSelected={(gameVariant) => updateContext({ gameVariant })}
          selectedMode={gameVariant}
        />
      </Box>
    </>
  );
}
