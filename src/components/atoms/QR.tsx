import { QRCodeSVG } from "qrcode.react";

type Props = {
  text: string;
};

export function Qr({ text }: Props) {
 return <QRCodeSVG value={text} size={250} />;
}
