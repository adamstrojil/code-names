/** @jsxImportSource @emotion/react */

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

const languageSelectId = "languageSelect";
const modeSelectId = "modeSelect";

export function OptionsMenu({ setWords }: Props) {
  const {
    updateContext,
    gameState: { gameVariant, language },
  } = useContext(GameContext);
  return (
    <>
      <Box
        mt="2em"
        display="flex"
        justifyContent="center"
        css={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Box css={{ display: "flex", flexDirection: "row", gap: "15px" }}>
          <Box css={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor={modeSelectId}>Mode:</label>
            <GameModeSelect
              id={modeSelectId}
              onSelected={(gameVariant) => updateContext({ gameVariant })}
              selectedMode={gameVariant}
            />
          </Box>
          <Box css={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor={languageSelectId}>Language:</label>
            <LanguageSelect
              id={languageSelectId}
              onSelected={(language) => updateContext({ language })}
              selectedLanguage={language}
            />
          </Box>
          <Button onClick={() => setWords(getNewWordCardSet())}>
            <TextWithIcon
              text="New Game"
              icon={MdOutlineRestartAlt}
              iconPlacement="left"
            />
          </Button>
        </Box>
      </Box>
    </>
  );
}
