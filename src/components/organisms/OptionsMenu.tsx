/** @jsxImportSource @emotion/react */

import { useContext } from "react";
import { MdOutlineRestartAlt } from "react-icons/md";

import { GameContext } from "../../context/GameContext";
import { getNewWordCardSet } from "../../lib/utils";
import { WordCard } from "../../types";
import { Box, Button, Link, TextWithIcon } from "../atoms";
import { GameModeSelect, LanguageSelect, ThemeSelect } from "../molecules";
import { useTheme } from "../../theme/theme";
import { IoIosArrowBack } from "react-icons/io";

type Props = {
  setWordCards: (words: Array<WordCard>) => void;
};

const languageSelectId = "languageSelect";
const modeSelectId = "modeSelect";
const themeSelectId = "themeSelect";

export function OptionsMenu({ setWordCards }: Props) {
  const {
    updateContext,
    gameState: { gameVariant, language },
  } = useContext(GameContext);
  const { theme } = useTheme();
  return (
    <>
      <Box
        mt="2em"
        display="flex"
        justifyContent="center"
        css={{
          flexWrap: "wrap",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Box css={{ display: "flex", gap: "16px" }}>
        <Link to={"/"}>
            <TextWithIcon
              icon={IoIosArrowBack}
              text="Main menu"
              iconPlacement="left"
              gap="2px"
            />
          </Link>
          <Box display="flex" gap="4px" css={{ flexDirection: "column" }}>
            <label htmlFor={modeSelectId} style={{ color: theme.colors.text }}>
              Mode:
            </label>
            <GameModeSelect
              id={modeSelectId}
              onSelected={(gameVariant) => updateContext({ gameVariant })}
              selectedMode={gameVariant}
            />
          </Box>
          <Box display="flex" gap="4px" css={{ flexDirection: "column" }}>
            <label
              htmlFor={languageSelectId}
              style={{ color: theme.colors.text }}
            >
              Language:
            </label>
            <LanguageSelect
              id={languageSelectId}
              onSelected={(language) => updateContext({ language })}
              selectedLanguage={language}
            />
          </Box>
          <Box display="flex" gap="4px" css={{ flexDirection: "column" }}>
            <label htmlFor={themeSelectId} style={{ color: theme.colors.text }}>
              Theme:
            </label>
            <ThemeSelect id={themeSelectId} />
          </Box>
          {/* <ThemeButton /> */}
          <Button onClick={() => setWordCards(getNewWordCardSet())}>
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
