type Option<T> = {
  value: T;
  label: string;
};

type Props<T> = {
  options: Option<T>[];
  selectedOption: T | null;
  onChange: (value: T) => void;
};

const style = {
  borderRadius: "5px",
  backgroundColor: "white",
  color: "black",
  border: "none",
  textAlign: "center" as "center",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px 16px 2px",
  cursor: "pointer",
  outline: "none",
};

export function Select<T extends string>({
  onChange,
  selectedOption,
  options,
}: Props<T>) {
  return (
    <select
      style={style}
      value={selectedOption || ""}
      onChange={(event) => {
        onChange(event.target.value as T);
      }}
    >
      {options.map(({ value, label }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  );
}
