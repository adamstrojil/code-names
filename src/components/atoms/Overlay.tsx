import React, { ReactNode, useEffect, useRef } from "react";

type Props = {
  isVisible: boolean;
  children: ReactNode;
  contentHeight?: string;
};

export const Overlay = ({
  isVisible,
  children,
  contentHeight = "70vh",
}: Props) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      const timeoutId = setTimeout(() => {
        if (overlayRef.current) {
          overlayRef.current.style.opacity = "1";
        }
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [isVisible]);

  const overlayStyles = {
    overlay: {
      opacity: 0,
      transition: "opacity 500ms ease-in-out",
      position: "fixed" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    overlayContent: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "2vh",
      height: contentHeight,
      boxSizing: "border-box" as const,
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    },
  };

  return isVisible ? (
    <div ref={overlayRef} style={overlayStyles.overlay}>
      <div style={overlayStyles.overlayContent}>{children}</div>
    </div>
  ) : null;
};
