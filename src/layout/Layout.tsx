import {
    IconChevronDown,
    IconChevronLeft,
    IconChevronRight,
} from '@tabler/icons-react';
import { Outlet } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { chatModel } from '../entities/chat/model';
import { TPlace } from '../entities/search/model/types';
import { songModel } from '../entities/song/new-model';
import { userModel } from '../entities/user/model';
import { UserCover } from '../entities/user/ui/UserCover';
import { GlobalSearch } from '../features/globalSearch';
import { LoginButton } from '../features/loginButton';
import { ThemeButton } from '../features/themeButton';
import { Button } from '../shared/components/button';
import { Flex } from '../shared/components/flex';
import { Logo } from '../shared/components/logo';
import Popover from '../shared/components/popover';
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
import { sidebarApi, useSidebar } from './sidebar/model';
import { Toast } from './toast/ui';

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
    width: 100%;
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
    padding-right: var(--page-gap);
    gap: 92px;
    max-height: 56px;

    .hide-sidebar-button {
        opacity: 0;
    }

    &:hover .hide-sidebar-button {
        opacity: 1;
    }

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

const UserButton = styled(Button)`
    border-radius: 20px;
    padding: 4px;
    padding-right: 14px;
    max-width: 220px;
    width: fit-content;
    justify-content: space-between;

    .name {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 0.8rem;
    }
`;

const GlobalSearchWrapper = styled.div`
    max-width: 100%;

    input {
        width: 450px;
        border-radius: 8px;
        outline: 1px solid ${({ theme }) => theme.colors.border};
    }
`;

export const Layout = () => {
    const [currentUser] = userModel.useUser();
    const fullScreen = songModel.useFullScreenPlayer();
    const [currentChat] = chatModel.useCurrentChat();
    const [params] = useSearchParams();
    const queryValue = params.get('query') ?? '';
    const where = (params.get('where') ?? '') as TPlace | '';
    const isCollapsed = useSidebar();

    useMediaMetadata();

    const handleOpenUserPopup = (e: Evt<'btn'>) => {
        e.stopPropagation();
        popupModel.events.open({
            content: <UserContextMenu />,
            e,
            height: 209,
        });
    };

    const handleHideSidebar = () => {
        sidebarApi.toggle();
    };

    return (
        <>
            <InitialLoading />
            <FullScreenFullScreenPlayer open={fullScreen} />
            <Modal />
            <Popup />

            <LayoutHeader>
                <Flex gap={0}>
                    <Flex
                        width={
                            isCollapsed
                                ? '60px'
                                : 'calc(var(--sidebar-width) - 30px)'
                        }
                        jc="space-between"
                        padding={`0 ${isCollapsed ? 10 : 20}px 0 0`}
                    >
                        <Logo short={isCollapsed} />
                        <Popover
                            content={
                                isCollapsed ? 'Unfold sidebar' : 'Hide sidebar'
                            }
                            position="right"
                        >
                            <Button
                                onClick={handleHideSidebar}
                                className="hide-sidebar-button"
                                $width="30px"
                                $height="30px"
                            >
                                {isCollapsed ? (
                                    <IconChevronRight size={18} opacity={0.5} />
                                ) : (
                                    <IconChevronLeft size={20} opacity={0.5} />
                                )}
                            </Button>
                        </Popover>
                    </Flex>
                    <GlobalSearchWrapper
                        className={isCollapsed ? 'collapsed' : ''}
                    >
                        <GlobalSearch
                            showTabs={false}
                            queryValue={queryValue}
                            where={where}
                        />
                    </GlobalSearchWrapper>
                </Flex>
                <Flex gap={16}>
                    <ThemeButton />

                    {currentUser && (
                        <UserButton
                            className="outline"
                            onClick={handleOpenUserPopup}
                        >
                            <Flex gap={8}>
                                {currentUser.isAdmin && <AdminCircle />}
                                <UserCover
                                    colors={currentUser?.imageColors}
                                    src={currentUser?.photoURL}
                                    size={'30px'}
                                    isAuthor={currentUser?.isAuthor}
                                />
                                {/* <span className="name">
                                    {currentUser.displayName}
                                </span> */}
                            </Flex>
                            <IconChevronDown size={14} />
                        </UserButton>
                    )}
                    <LoginButton />
                </Flex>
            </LayoutHeader>
            <LayoutStyled className={`${currentChat ? 'chat-page' : ''} `}>
                <Sidebar collapsed={isCollapsed} />
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
