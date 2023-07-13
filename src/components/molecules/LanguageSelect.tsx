import { Language } from "../../types";
import { Select } from "../atoms/Select";

type Props = {
  selectedLanguage: Language;
  onSelected: (value: Language) => void;
};

const OPTIONS: Array<{ value: Language; label: string }> = [
  { value: "english", label: "🇬🇧 English" },
  { value: "czech", label: "🇨🇿 Czech" },
  { value: "turkish", label: "🇹🇷 Turkish" },
];

export function LanguageSelect({ onSelected, selectedLanguage }: Props) {
  return (
    <Select
      options={OPTIONS}
      selectedOption={selectedLanguage}
      onChange={onSelected}
    />
  );
}
