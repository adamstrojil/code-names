import { useState } from "react";
import { QrReader } from "react-qr-reader";
import { Optional } from "../types";

function useQrScanner() {
  const [scanResult, setScanResult] = useState<Optional<string>>(null);

  const handleScan = (data:string) => {
    if (data) {
      setScanResult(data);
    }
  };

  const qrScanner = (
    <div>
      <h2>Reader</h2>
      {scanResult ? (
        scanResult
      ) : (
        <QrReader
          scanDelay={500}
          onResult={(result, error) => {
            if (result) {
              handleScan(result.getText());
            }

            // if (error) {
            //   handleError(error);
            // }
          }}
          constraints={{ facingMode: "environment" }}
        />
      )}
    </div>
  );

  return { qrScanner, scanResult };
}

export default useQrScanner;
