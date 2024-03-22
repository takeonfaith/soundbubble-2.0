import { ErrorBoundary } from "@components/errorBoundary";
import { AppAudio } from "AppAudio";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "routing/AppRouter";
import styled from "styled-components";
import { Database } from "./database";
import { userModel } from "./entities/user/model";
import { TUser } from "./entities/user/model/types";

const AppStyled = styled.div`
  height: 100dvh;
  background: ${({ theme }) => theme.colors.pageBackground};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.colors.pageBackground};
  padding: 16px;
`;

function App() {
  useEffect(() => {
    Database.Users.onAuthStateChanged(async (userCred) => {
      userModel.events.setLoggining(true)
      const user = await Database.Users.getUserByUid(userCred?.uid)
      console.log(user)
      userModel.events.setUser({ ...userCred, ...user } as TUser)
    })
  }, [])

  return (
    <BrowserRouter>
      <AppStyled>
        <ErrorBoundary>
          <AppAudio />
          <AppRouter />
        </ErrorBoundary>
      </AppStyled>
    </BrowserRouter>
  );
}

export default App;
