import React from "react";

import { Global, ThemeProvider } from "@emotion/react";

import theme from "@/styles/theme";
import { globals } from "@/styles/global";

interface StyleProviderProps {
  children: any;
}

export const StyleProvider: React.FC<StyleProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globals} />
      {children}
    </ThemeProvider>
  );
};
