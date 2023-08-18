import { useEffect } from "react";
import { ThemeName, useTheme } from "../../theme/theme";
import { Select } from "../atoms";

type Props = {
  id?: string;
};

const OPTIONS: Array<{ value: ThemeName; label: string }> = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

export function ThemeSelect({ id }: Props) {
  const { theme, changeTheme, themeName } = useTheme();

  useEffect(
    function changeBackgroundOfBodyFromInside() {
      document.body.style.cssText += `background-color:${theme.colors.gameBackground}`;
    },
    [theme]
  );

  return (
    <Select
      id={id}
      options={OPTIONS}
      selectedOption={themeName}
      onChange={changeTheme}
    />
  );
}
