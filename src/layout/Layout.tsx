import { songModel } from '@song/model';
import { Outlet } from 'react-router';
import { styled } from 'styled-components';
import { useMediaMetadata } from '../shared/hooks/useMediaMetadata';
import { FullScreenFullScreenPlayer } from './fullScreenPlayer';
import { InitialLoading } from './initialLoading';
import { MobileMenu } from './mobileMenu';
import { Modal } from './modal/ui';
import { Player } from './player';
import { Popup } from './popup';
import { Sidebar } from './sidebar';
import { Confirm } from './confirm/ui';
import { Toast } from './toast/ui';

export const LayoutStyled = styled.div`
    height: calc(100dvh - var(--player-size) - var(--page-gap) * 2);
    display: flex;
    padding-top: var(--page-gap);
    padding-right: var(--page-gap);

    @media (max-width: 1000px) {
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

    @media (max-width: 1000px) {
        border-radius: 0;
    }
`;

export const Layout = () => {
    const fullScreen = songModel.fullscreen.useFullScreen();
    useMediaMetadata();

    return (
        <>
            <InitialLoading />
            <FullScreenFullScreenPlayer open={fullScreen} />
            <Modal />
            <Popup />
            <LayoutStyled>
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
