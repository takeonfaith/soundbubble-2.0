import { ErrorBoundary } from '@components/errorBoundary';
import { AppAudio } from 'AppAudio';
import { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from 'routing/AppRouter';
import styled, { ThemeProvider } from 'styled-components';
import { useTheme } from './app/theme';
import { userModel } from './entities/user/model';
import { useOnboarding } from './features/onboarding';
import { FB } from './firebase';
import { GlobalStyles } from './globalStyles';
import { useSidebar } from './layout/sidebar/model';
import { CustomRouter } from './routing/CustomRouter';
import { useGetAppHotKeys } from './shared/hooks/useGetAppHotKeys';
import useHotkeys from './shared/hooks/useHotKeys';
import { I18nextProvider } from 'react-i18next';
import i18next from './i18n';
import { MEDIA_QUERIES } from './shared/constants/screenSize';

const AppStyled = styled.div`
    height: 100dvh;
    background: ${({ theme }) => theme.colors.pageBackground2};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;

    ${MEDIA_QUERIES.isTablet} {
        background: ${({ theme }) => theme.colors.pageBackground};
    }
`;

function App() {
    const { themeParams } = useTheme();
    const isCollapsed = useSidebar();
    const hotkeys = useGetAppHotKeys();

    useOnboarding();

    useHotkeys(hotkeys);

    useEffect(() => {
        FB.onAuthStateChanged(async (userCred) => {
            userModel.events.loadUserData(userCred);
        });
    }, []);

    return (
        <I18nextProvider i18n={i18next}>
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
        </I18nextProvider>
    );
}

export default App;
