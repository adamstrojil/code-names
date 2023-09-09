/** @jsxImportSource @emotion/react */

import { MdOutlineRestartAlt } from "react-icons/md";

import { IoIosArrowBack } from "react-icons/io";
import {
  changeGameLanguage,
  changeGameVariant,
  restartGame,
  selectGameState,
} from "../../features/Game/gameSlice";
import { scrollToTop } from "../../lib/utils";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useTheme } from "../../theme/theme";
import { Box, Button, Link, TextWithIcon } from "../atoms";
import { GameModeSelect, LanguageSelect, ThemeSelect } from "../molecules";

const languageSelectId = "languageSelect";
const modeSelectId = "modeSelect";
const themeSelectId = "themeSelect";

export function OptionsMenu() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const { variant, language } = useAppSelector(selectGameState);

  return (
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
            onSelected={(variant) => dispatch(changeGameVariant(variant))}
            selectedMode={variant}
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
            onSelected={(language) => dispatch(changeGameLanguage(language))}
            selectedLanguage={language}
          />
        </Box>
        <Box display="flex" gap="4px" css={{ flexDirection: "column" }}>
          <label htmlFor={themeSelectId} style={{ color: theme.colors.text }}>
            Theme:
          </label>
          <ThemeSelect id={themeSelectId} />
        </Box>
        <Button
          onClick={() => {
            dispatch(restartGame());
            scrollToTop();
          }}
        >
          <TextWithIcon
            text="New Game"
            icon={MdOutlineRestartAlt}
            iconPlacement="left"
          />
        </Button>
      </Box>
    </Box>
  );
}
