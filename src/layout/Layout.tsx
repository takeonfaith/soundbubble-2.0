import { Outlet } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { chatModel } from '../entities/chat/model';
import { TPlace } from '../entities/search/model/types';
import { userModel } from '../entities/user/model';
import { UserCover } from '../entities/user/ui/UserCover';
import { GlobalSearch } from '../features/globalSearch';
import { LoginButton } from '../features/loginButton';
import { ThemeButton } from '../features/themeButton';
import { Button } from '../shared/components/button';
import { Flex } from '../shared/components/flex';
import { Logo } from '../shared/components/logo';
import { useMediaMetadata } from '../shared/hooks/useMediaMetadata';
import { Confirm } from './confirm/ui';
import { FullScreenFullScreenPlayer } from './fullScreenPlayer';
import { AdminCircle } from './header/styles';
import { UserContextMenu } from './header/UserContextMenu';
import { InitialLoading } from './initialLoading';
import { MobileMenu } from './mobileMenu';
import { Modal } from './modal/ui';
import { Player } from './player';
import { Popup } from './popup';
import { popupModel } from './popup/model';
import { Sidebar } from './sidebar';
import { Toast } from './toast/ui';
import { songModel } from '../entities/song/new-model';

export const LayoutStyled = styled.div`
    height: calc(100dvh - var(--player-size) - var(--page-gap) * 2 - 56px);
    display: flex;
    padding-top: var(--page-gap);
    padding-right: var(--page-gap);

    @media (max-width: 756px) {
        height: calc(100dvh - 130px);
        padding: 0;

        &.chat-page {
            height: 100dvh;
        }
    }
`;

const RightSide = styled.div`
    width: calc(100% - var(--sidebar-width));
    height: 100%;
    position: relative;
    /* box-shadow: ${({ theme }) => theme.colors.shadow}; */
    border-radius: var(--desktop-page-radius);
    overflow: hidden;
    background: ${({ theme }) => theme.colors.pageBackground};
    border: 1px solid ${({ theme }) => theme.colors.border};

    @media (max-width: 756px) {
        border-radius: 0;
    }
`;

const LayoutHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 30px;
    padding-bottom: 0;
    gap: 92px;

    .general-cover {
        outline: 2px solid ${({ theme }) => theme.colors.pageBackground2};
    }

    @media (max-width: 1100px) {
        .logo-text {
            display: none;
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const GlobalSearchWrapper = styled.div`
    width: 480px;
    max-width: 100%;

    input {
        border-radius: 14px;
    }
`;

export const Layout = () => {
    const [currentUser] = userModel.useUser();
    const fullScreen = songModel.useFullScreenPlayer();
    const [currentChat] = chatModel.useCurrentChat();
    const [params] = useSearchParams();
    const queryValue = params.get('query') ?? '';
    const where = (params.get('where') ?? '') as TPlace | '';
    useMediaMetadata();

    const handleOpenUserPopup = (e: Evt<'btn'>) => {
        e.stopPropagation();
        popupModel.events.open({
            content: <UserContextMenu />,
            e,
            height: 345,
        });
    };

    return (
        <>
            <InitialLoading />
            <FullScreenFullScreenPlayer open={fullScreen} />
            <Modal />
            <Popup />

            <LayoutHeader>
                <Flex gap={22}>
                    <Flex gap={40}>
                        <Logo />
                        <ThemeButton />
                    </Flex>
                    <GlobalSearchWrapper>
                        <GlobalSearch
                            showTabs={false}
                            queryValue={queryValue}
                            where={where}
                        />
                    </GlobalSearchWrapper>
                </Flex>
                <>
                    {currentUser && (
                        <Button $width="40px" onClick={handleOpenUserPopup}>
                            {currentUser.isAdmin && <AdminCircle />}
                            <UserCover
                                colors={currentUser?.imageColors}
                                src={currentUser?.photoURL}
                                size={'30px'}
                                isAuthor={currentUser?.isAuthor}
                            />
                        </Button>
                    )}
                    <LoginButton />
                </>
            </LayoutHeader>
            <LayoutStyled className={currentChat ? 'chat-page' : ''}>
                <Sidebar />
                <RightSide>
                    <Outlet />
                </RightSide>
            </LayoutStyled>
            <Player />
            <Confirm />
            <Toast />
            <MobileMenu />
        </>
    );
};
