import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
    greyText: "rgb(134, 141, 146)",
  },
  borders: {
    greyBorder: "rgb(208, 216, 223)",
    greyText: "rgb(134, 141, 146)",
    geryWeek: "rgb(134, 141, 146)",
    greyBorderButton: "rgb(204, 204, 204)",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const AppProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { AppProvider };
