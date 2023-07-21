/** @jsxImportSource @emotion/react */

import { useZxing } from "react-zxing";
import { Box } from "../atoms";

type Props = {
  onScanResult: (result: string) => void;
};

export const QrScanner = ({ onScanResult }: Props) => {
  const { ref } = useZxing({
    onResult(result) {
      onScanResult(result.getText());
    },
  });

  return (
    <Box display="flex" css={{ height: "50vh" }}>
      <video ref={ref} />
    </Box>
  );
};
