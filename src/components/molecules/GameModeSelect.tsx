import { GameVariant } from "../../types";
import { Select } from "../atoms";

type Props = {
  id?: string;
  selectedMode: GameVariant;
  onSelected: (value: GameVariant) => void;
};

const OPTIONS: Array<{ value: GameVariant; label: string }> = [
  { value: "single", label: "Single" },
  { value: "mirrored", label: "Mirrored" },
  { value: "duolingo", label: "Duolingo" },
];

export function GameModeSelect({ onSelected, selectedMode, id }: Props) {
  return (
    <Select
      id={id}
      options={OPTIONS}
      selectedOption={selectedMode}
      onChange={onSelected}
    />
  );
}
