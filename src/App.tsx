import { ErrorBoundary } from "@components/errorBoundary";
import { AppAudio } from "AppAudio";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "routing/AppRouter";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "./app/theme";
import { Database } from "./database";
import { userModel } from "./entities/user/model";
import { TUser } from "./entities/user/model/types";
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

  useEffect(() => {
    Database.Users.onAuthStateChanged(async (userCred) => {
      console.log(userCred);
      if (userCred === null) return
      userModel.events.setLoggining(true)
      const user = await Database.Users.getUserByUid(userCred?.uid)
      // console.log(user)
      userModel.events.setUser({ ...userCred, ...user } as TUser)
    })
  }, [])

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
