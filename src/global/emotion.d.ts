import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    maxWidth: {
      desktop: string;
      wide: string;
    };
    margins: {
      mobile: string;
      tablet: string;
    };
    gutters: {
      mobile: string;
      tablet: string;
      desktop: string;
      wide: string;
    };
    breakpoint: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    colors: {
      primary: string;
      secondary: string;
      white: string;
    };
  }
}
