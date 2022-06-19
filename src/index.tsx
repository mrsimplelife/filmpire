import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

declare module "@mui/styles" {
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
