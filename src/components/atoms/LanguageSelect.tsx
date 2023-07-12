import { Language } from "../../types";

type Props = {
  selectedLanguage: Language;
  onSelected: (value: Language) => void;
};

const style = {
  borderRadius: "5px",
  backgroundColor: "white",
  color: "black",
  border: "2px solid #bca785",
  padding: "16px 16px",
  textAlign: "center" as "center",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px 16px 2px",
  cursor: "pointer",
  outline: "none",
};

export function LanguageSelect({ onSelected, selectedLanguage }: Props) {
  return (
    <select
      style={style}
      value={selectedLanguage}
      onChange={(event) => {
        onSelected(event.target.value as Language);
      }}
    >
      <option value={"english"}>🇬🇧 English</option>
      <option value={"czech"}>🇨🇿 Czech</option>
      <option value={"turkish"}>🇹🇷 Turkish</option>
    </select>
  );
}
