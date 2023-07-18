import styled from "@emotion/styled";

type Option<T> = {
  value: T;
  label: string;
};

type Props<T> = {
  options: Option<T>[];
  selectedOption: T;
  onChange: (value: T) => void;
};

const StyledSelect = styled.select({
  borderRadius: "5px",
  backgroundColor: "#efefef",
  color: "#000000",
  border: "none",
  textAlign: "center",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px 16px 2px",
  cursor: "pointer",
  minWidth: "100px",
});

export function Select<T extends string>({
  onChange,
  selectedOption,
  options,
}: Props<T>) {
  return (
    <StyledSelect
      value={selectedOption}
      onChange={(event) => {
        onChange(event.target.value as T);
      }}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </StyledSelect>
  );
}
