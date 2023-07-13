import { QRCodeSVG } from "qrcode.react";

type Props = {
  text: string;
  size?: number;
};

export function Qr({ text, size = 250 }: Props) {
  return <QRCodeSVG value={text} size={size} />;
}
