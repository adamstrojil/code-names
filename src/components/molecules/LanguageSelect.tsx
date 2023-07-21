import { Language } from "../../types";
import { Select } from "../atoms";

type Props = {
  id?: string;
  selectedLanguage: Language;
  onSelected: (value: Language) => void;
};

const OPTIONS: Array<{ value: Language; label: string }> = [
  { value: "english", label: "English" },
  { value: "czech", label: "Czech" },
  { value: "turkish", label: "Turkish" },
];

export function LanguageSelect({ onSelected, selectedLanguage, id }: Props) {
  return (
    <Select
      id={id}
      options={OPTIONS}
      selectedOption={selectedLanguage}
      onChange={onSelected}
    />
  );
}
