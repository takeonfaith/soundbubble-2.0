import { ErrorBoundary } from '@components/errorBoundary';
import { AppAudio } from 'AppAudio';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from 'routing/AppRouter';
import styled, { ThemeProvider } from 'styled-components';
import { useTheme } from './app/theme';
import { userModel } from './entities/user/model';
import { GlobalStyles } from './globalStyles';
import { useEffect } from 'react';
import { Database } from './database';

const AppStyled = styled.div`
    height: 100dvh;
    background: ${({ theme }) => theme.colors.pageBackground};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

function App() {
    const { themeParams } = useTheme();

    useEffect(() => {
        userModel.events.setIsLoadingUsers(true);
        Database.Users.onAuthStateChanged(async (userCred) => {
            const user = await Database.Users.getUserByUid(userCred?.uid);
            userModel.events.setUser(user);
            userModel.events.setIsLoadingUsers(false);
        });
    }, []);

    return (
        <ThemeProvider theme={themeParams}>
            <GlobalStyles />
            <BrowserRouter basename="/soundbubble-2.0/">
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
