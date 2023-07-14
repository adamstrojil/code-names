import { GameVariant } from "../../types";
import { Select } from "../atoms/Select";

type Props = {
  selectedMode: GameVariant;
  onSelected: (value: GameVariant) => void;
};

const OPTIONS: Array<{ value: GameVariant; label: string }> = [
  { value: "single", label: "Single" },
  { value: "mirrored", label: "Mirrored" },
  { value: "duolingo", label: "Duolingo" },
];

export function GameModeSelect({ onSelected, selectedMode }: Props) {
  return (
    <Select
      options={OPTIONS}
      selectedOption={selectedMode}
      onChange={onSelected}
    />
  );
}
