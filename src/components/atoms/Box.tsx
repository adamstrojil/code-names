import styled, { CSSObject } from "@emotion/styled";
import React, { ReactNode } from "react";

type BoxProps = {
  as?: React.ElementType;
  css?: CSSObject;
  children: ReactNode;

  margin?: string;
  m?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  marginLeft?: string;
  marginRight?: string;
  mx?: string;
  marginTop?: string;
  marginBottom?: string;
  my?: string;

  padding?: string;
  p?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  paddingLeft?: string;
  paddingRight?: string;
  px?: string;
  paddingTop?: string;
  paddingBottom?: string;
  py?: string;

  display?: string;
  justifyContent?: string;
};

const StyledBox = styled.div<BoxProps>(
  ({
    margin,
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    display,
    justifyContent,
  }) => ({
    margin: margin || m,
    marginLeft: marginLeft || ml || mx,
    marginRight: marginRight || mr || mx,
    marginTop: marginTop || mt || my,
    marginBottom: marginBottom || mb || my,

    padding: padding || p,
    paddingLeft: paddingLeft || pl || px,
    paddingRight: paddingRight || pr || px,
    paddingTop: paddingTop || pt || py,
    paddingBottom: paddingBottom || pb || py,

    display,
    justifyContent,
  })
);

export const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};
