import { RxInfoCircled } from "react-icons/rx";

import { TextWithIcon } from "../atoms";

type Props = {
  text?: string;
  color?: string;
};

export function ScannerInfoText({ text, color }: Props) {
  return (
    <TextWithIcon
      css={{ fontSize: "1rem" }}
      color={color}
      text={
        text ||
        "Psst! You can also use our scanner from the main page without needing any extra apps."
      }
      icon={RxInfoCircled}
      iconPlacement="left"
    />
  );
}
