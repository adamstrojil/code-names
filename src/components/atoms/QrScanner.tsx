import { QrReader } from "react-qr-reader";

type Props = {
  onScanResult: (result: string) => void;
};

export function QrScanner({ onScanResult }: Props) {
  return (
    <QrReader
      scanDelay={500}
      onResult={(result, error) => {
        if (!!result) {
          onScanResult(result.getText());
        }

        // if (!!error) {
        //   handleError(error);
        // }
      }}
      constraints={{ facingMode: "environment" }}
    />
  );
}
