/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import boardImg from "../../assets/board.png";
import mapImg from "../../assets/map.png";
import { useTheme } from "../../theme/theme";
import { Box, MainMenuLink } from "../atoms";
import { ThemeButton } from "../molecules";

const CenteredContainer = styled.div({
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const MainMenuLinkGroup = styled.div({
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  justifyContent: "center",
});

export function MainMenuPage() {
  const { theme } = useTheme();
  const isMobile = useMediaQuery({ query: "(max-width: 420px)" });

  return (
    <>
      <Box display="flex" justifyContent="center">
        <ThemeButton />
      </Box>
      <CenteredContainer>
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            as="h1"
            css={{
              fontSize: "6vh",
              fontWeight: "400",
              textAlign: "center",
              color: theme.colors.text,
            }}
          >
            Code words
          </Box>

          <MainMenuLinkGroup>
            {!isMobile && (
              <MainMenuLink to="/board">
                <>
                  Show board
                  <img
                    aria-hidden
                    alt=""
                    src={boardImg}
                    style={{ width: "150px" }}
                  />
                </>
              </MainMenuLink>
            )}
            <MainMenuLink to="/map">
              <>
                Scan map
                <img
                  aria-hidden
                  alt=""
                  src={mapImg}
                  style={{ width: "150px" }}
                />
              </>
            </MainMenuLink>
          </MainMenuLinkGroup>
          {!isMobile && (
            <Box
              as="section"
              mt="56px"
              css={{
                borderRadius: "8px",
                backgroundColor: `${theme.colors.buttonBackground}57`,
                padding: "8px",
                borderTop: `1px solid ${theme.colors.text}`,
                borderBottom: `1px solid ${theme.colors.text}`,
                maxWidth: "70vw",
              }}
            >
              {/* <TextWithIcon
                as="h2"
                icon={GiCardPlay}
                text="How to play"
                iconPlacement="left"
                gap="6px"
                css={{ textAlign: "left", margin: 0, fontWeight: 500 }}
              />
              <article style={{ color: theme.colors.text }}>
                 <ol>
                  <li>Open board with words on a computer or tablet.</li>
                  <li>Pick the game mode, language and theme.</li>
                  <li>The map can be scanned from the QR code below the board, but only scanner from this page can be used!</li>
                  <li>Red team starts, words can be selected by clicking on the cards.</li>
                  
                  <li>
                    Divide players into two teams (Red and Blue) and select a
                    leader for each team.
                  </li>
                  <li>Show board with words for players.</li>
                  <li>
                    Team leaders need to scan the QR code below board with their
                    phones to get the current map.
                  </li>
                  <li>
                    Leaders then take turns giving clues to their teams to find
                    their words.
                  </li>
                  <li>
                    Clue must consist of only ONE word and ONE number - the clue
                    should connect the team’s words, and number marks how many
                    guesses should be made.
                  </li>
                  <li>
                    Team that guesses all their words first wins. Selecting
                    opponent’s card or a neutral card ends team’s turn.
                    Selecting assassin’s card means immediate game over for the
                    team.
                  </li> 
                </ol> 
              </article>
               <TextWithIcon
                as="h2"
                icon={GiBookmark}
                text="Rules"
                iconPlacement="left"
                gap="6px"
                css={{ textAlign: "left", margin: 0, fontWeight: 500 }}
              /> */}
              <article style={{ color: theme.colors.text }}>
                {/* <TextWithIcon
                  icon={PiWarning}
                  text={"Important: "}
                  iconPlacement="left"
                /> */}
                <p>
                  The game is inspired by the mechanics of Codenames. This
                  website is not affiliated with CGE, the editor of Codenames.
                  If you like the game, please support the authors and buy a
                  physical version on&nbsp;
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://czechgames.com/en/codenames/"
                  >
                    Czech Games Edition
                  </a>
                  , or try the official digital version at&nbsp;
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://codenamesgame.com/"
                  >
                    CodeNamesGame
                  </a>
                  .
                </p>
                <p>
                  I created this website to practice my web development
                  skills and to be able to play it with my erasmus friends. It is open-source on github.
                </p>
              </article>
            </Box>
          )}
        </Box>
      </CenteredContainer>
    </>
  );
}
