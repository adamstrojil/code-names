import { QRCodeSVG } from "qrcode.react";
import { useTheme } from "../../theme/theme";

type Props = {
  text: string;
  size?: string;
  borderSize?: string;
};

export function QrCode({ text, size = "40vh", borderSize = "16px" }: Props) {
  const { theme } = useTheme();

  return (
    <QRCodeSVG
      value={text}
      style={{
        boxSizing: "border-box",
        border: `${borderSize} solid ${theme.colors.qr.border}`,
        width: size,
        height: size,
      }}
    />
  );
}
