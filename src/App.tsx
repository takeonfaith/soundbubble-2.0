import { ErrorBoundary } from "@components/errorBoundary";
import { AppAudio } from "AppAudio";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "routing/AppRouter";
import styled from "styled-components";

const AppStyled = styled.div`
  height: 100dvh;
  background: ${({ theme }) => theme.colors.pageBackground};
  overflow-y: auto;

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
