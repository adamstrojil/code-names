/** @jsxImportSource @emotion/react */

import { CSSObject } from "@emotion/react";
import { ReactNode, useState, useEffect } from "react";
import { Box } from "../atoms";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  initialStyle?: CSSObject;
  finalStyle?: CSSObject;
  otherStyles?: CSSObject;
};

export function Transition({
  children,
  delay = 0,
  duration = 300,
  initialStyle = { opacity: 0, transform: "scale(1.1)" },
  finalStyle = { opacity: 1, transform: "none" },
  otherStyles,
}: Props) {
  const [style, setStyle] = useState(initialStyle);

  useEffect(() => {
    setStyle(finalStyle);
  }, []);

  const transitioningProperties = Object.keys(finalStyle).reduce(
    (acc, prop) => `${acc}, ${prop}`
  );

  return (
    <Box
      css={{
        transitionProperty: transitioningProperties,
        transitionTimingFunction: `ease-in-out`,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        ...otherStyles,
        ...style,
      }}
    >
      {children}
    </Box>
  );
}
