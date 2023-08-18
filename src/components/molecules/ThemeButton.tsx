import { useEffect } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useTheme } from "../../theme/theme";
import { Button, TextWithIcon } from "../atoms";

export function ThemeButton() {
  const { theme, changeTheme, themeName } = useTheme();

  useEffect(
    function changeBackgroundOfBodyFromInside() {
      document.body.style.cssText += `background-color:${theme.colors.gameBackground}`;
    },
    [theme]
  );

  return (
    <Button
      onClick={() => changeTheme()}
      style={{
        borderRadius: "0 0 5px 5px",
        padding: "8px 16px",
      }}
    >
      <TextWithIcon
        iconPlacement="left"
        gap="8px"
        icon={themeName === "light" ? BsMoonStars : BsSun}
        text={`${themeName === "light" ? "Dark" : "Light"} theme`}
      />
    </Button>
  );
}
