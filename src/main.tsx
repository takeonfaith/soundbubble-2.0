import { THEME } from "@shared/constants/theme.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import { GlobalStyles } from "./globalStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
