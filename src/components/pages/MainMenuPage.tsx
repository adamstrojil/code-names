/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { GiBookmark } from "react-icons/gi";
import boardImg from "../../assets/board.png";
import mapImg from "../../assets/map.png";
import { Box, MainMenuLink, TextWithIcon } from "../atoms";
import { useTheme } from "../../theme/theme";

const CenteredContainer = styled.div({
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  // height: "100vh",
  flexDirection: "column",
});

const MainMenuLinkGroup = styled.div({
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  justifyContent: "center",
});

export function MainMenuPage() {
  const {
    theme,
  } = useTheme();
  return (
    <>
      <CenteredContainer>
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // backgroundColor: theme.colors.gameBackground,
          }}
        >
          <Box
            as="h1"
            css={{ fontSize: "6vh", fontWeight: "400", textAlign: "center", color: theme.colors.text }}
          >
            Code names
          </Box>
          <MainMenuLinkGroup>
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
          <Box
            as="section"
            my="32px"
            css={{
              display: "flex",
              flexDirection: "column",
              width: "max(45vw, 350px)",
              alignItems: "flex-start",
            }}
          >
            <TextWithIcon
              as="h2"
              icon={GiBookmark}
              text="Rules"
              iconPlacement="left"
              gap="6px"
              css={{ textAlign: "left", margin: 0, fontWeight: 500 }}
            />
            <article style={{color: theme.colors.text}}>
              <p>
                Codenames is a game played by 4 or more players in which players
                are split into two teams, red and blue, and guess words based on
                clues from their teammates. One player from each team becomes
                the spymaster, while the others play as field operatives. The
                end goal is to place all of the team’s agent tiles.
              </p>

              <p>
                During setup, 25 cards containing words are randomly laid out in
                a 5x5 grid. Some represent red agents (red squares), some
                represent blue agents (blue squares), one represents the
                assassin (black square), and the rest are innocent bystanders
                (beige squares). The spymasters receive a randomly dealt card
                with colored squares representing the words. They must help
                their field operatives guess the words representing their agents
                while avoiding opposing agents, innocent bystanders, and the
                assassin. The ‘lights’ on the key card represent which team will
                go first and have an extra agent that must be found.
              </p>

              <p>
                Each turn, the spymaster gives a verbal clue containing only a
                single word and a number. The verbal clue should represent
                agents of own color in some way. For example, for the word cards
                ‘beach’, ‘whale’, and ‘water’, one could give the clue ‘ocean’,
                as these things are all related to the ocean. The number
                represents how many words match that clue. The single word clue
                must be related by meaning, so it cannot be purely phonetically
                related. It also cannot be or contain any uncovered word. If an
                invalid clue is given – the clue is explicitly invalidated by
                the opposing spymaster – the turn ends immediately and the
                opposing team gets to randomly reveal one of their own agents.
              </p>

              <p>
                After the verbal clue is given, the field operatives must guess
                which of the words go with the clue. The word cards will
                subsequently be covered with an agent tile, a bystander tile, or
                the assassin tile by the spymaster as guesses are made. The
                field operatives must make at least one guess per turn, with the
                maximum number of guesses for a turn being the number given in
                the clue plus one. Once a correct guess is made, the field
                operatives may continue to make guesses or choose to end their
                turn voluntarily. If a bystander or an opposing agent is
                revealed, the turn ends. If the assassin is revealed, the game
                ends immediately with a loss for the guessing team. For a faster
                game, or in certain situations such as the opposing team taking
                too long guessing, a timer, such as the hourglass timer included
                in the game&apos;s packaging, can be used.
              </p>

              <p>
                Besides the assassin, the game ends when all of one team’s
                agents are found, winning the game for that team.
              </p>
              <a href="https://czechgames.com/en/codenames/">
                https://czechgames.com/en/codenames/
              </a>
            </article>
          </Box>
        </Box>
      </CenteredContainer>
    </>
  );
}
