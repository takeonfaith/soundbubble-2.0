import { Outlet } from 'react-router';
import { styled } from 'styled-components';
import { chatModel } from '../entities/chat/model';
import { songModel } from '../entities/song/new-model';
import { useMediaMetadata } from '../shared/hooks/useMediaMetadata';
import { Confirm } from './confirm/ui';
import { FullScreenFullScreenPlayer } from './fullScreenPlayer';
import { Indicator } from './indicator/ui';
import { InitialLoading } from './initialLoading';
import { MobileMenu } from './mobileMenu';
import { Modal } from './modal/ui';
import { Player } from './player';
import { Popup } from './popup';
import { Sidebar } from './sidebar';
import { useSidebar } from './sidebar/model';
import { Toast } from './toast/ui';
import { LayoutHeader } from './layoutHeader';

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

export const Layout = () => {
    const fullScreen = songModel.useFullScreenPlayer();
    const [currentChat] = chatModel.useCurrentChat();

    const isCollapsed = useSidebar();

    useMediaMetadata();

    return (
        <>
            <InitialLoading />
            <FullScreenFullScreenPlayer open={fullScreen} />
            <Modal />
            <Popup />
            <LayoutHeader />
            <LayoutStyled className={`${currentChat ? 'chat-page' : ''} `}>
                <Sidebar collapsed={isCollapsed} />
                <RightSide>
                    <Indicator />
                    <Outlet />
                </RightSide>
            </LayoutStyled>
            {!fullScreen && <Player />}
            <Confirm />
            <Toast />
            <MobileMenu />
        </>
    );
};
