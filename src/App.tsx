import { ErrorBoundary } from "@components/errorBoundary";
import { AppAudio } from "AppAudio";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "routing/AppRouter";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "./app/theme";
import { userModel } from "./entities/user/model";
import { GlobalStyles } from "./globalStyles";

const AppStyled = styled.div`
  height: 100dvh;
  background: ${({ theme }) => theme.colors.pageBackground};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

function App() {
  const { themeParams } = useTheme()
  userModel.gates.useLoadUser()

  return (
    <ThemeProvider theme={themeParams}>
      <GlobalStyles />
      <BrowserRouter>
        <AppStyled>
          <ErrorBoundary>
            <AppAudio />
            <AppRouter />
          </ErrorBoundary>
        </AppStyled>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
