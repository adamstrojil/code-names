import { useZxing } from "react-zxing";

type Props = {
  onScanResult: (result: string) => void;
};

export const QrScanner = ({ onScanResult }: Props) => {
  const { ref } = useZxing({
    onResult(result) {
      onScanResult(result.getText());
    },
  });

  return <video ref={ref} />;
};
