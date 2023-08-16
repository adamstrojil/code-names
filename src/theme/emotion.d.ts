import "@emotion/react";
import { MyTheme } from "./theme";

declare module "@emotion/react" {
  export interface Theme {
    colors: MyTheme;
  }
}
