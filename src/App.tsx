import { ErrorBoundary } from '@components/errorBoundary';
import { AppAudio } from 'AppAudio';
import { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from 'routing/AppRouter';
import styled, { ThemeProvider } from 'styled-components';
import { useTheme } from './app/theme';
import { userModel } from './entities/user/model';
import { FB } from './firebase';
import { GlobalStyles } from './globalStyles';
import { CustomRouter } from './routing/CustomRouter';
import { useSidebar } from './layout/sidebar/model';

const AppStyled = styled.div`
    height: 100dvh;
    background: ${({ theme }) => theme.colors.pageBackground3};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (max-width: 1000px) {
        background: ${({ theme }) => theme.colors.pageBackground};
    }
`;

function App() {
    const { themeParams } = useTheme();
    const isCollapsed = useSidebar();

    useEffect(() => {
        FB.onAuthStateChanged(async (userCred) => {
            userModel.events.loadUserData(userCred);
        });
    }, []);

    return (
        <ThemeProvider theme={themeParams}>
            <GlobalStyles collapsed={isCollapsed} />
            <HashRouter>
                <CustomRouter>
                    <AppStyled>
                        <ErrorBoundary>
                            <AppAudio />
                            <AppRouter />
                        </ErrorBoundary>
                    </AppStyled>
                </CustomRouter>
            </HashRouter>
        </ThemeProvider>
    );
}

export default App;
