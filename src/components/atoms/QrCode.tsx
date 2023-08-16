import { QRCodeSVG } from "qrcode.react";
import { useTheme } from "../../theme/theme";

type Props = {
  text: string;
  size?: number;
};

export function QrCode({ text, size = 250 }: Props) {
  const { theme } = useTheme();

  return (
    <QRCodeSVG
      value={text}
      size={size}
      style={{ border: `16px solid ${theme.colors.qr.border}` }}
    />
  );
}
