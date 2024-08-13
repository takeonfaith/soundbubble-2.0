import { songModel } from '@song/model';
import { Outlet } from 'react-router';
import { styled } from 'styled-components';
import { FullScreenFullScreenPlayer } from './fullScreenPlayer';
import { InitialLoading } from './initialLoading';
import { MobileMenu } from './mobileMenu';
import { Modal } from './modal';
import { Player } from './player';
import { Popup } from './popup';
import { Sidebar } from './sidebar';
import { useState } from 'react';
import { useUrlParamId } from '../shared/hooks/useUrlParamId';

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
    width: 100%;
    height: 100%;
    position: relative;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: var(--desktop-page-radius);
    overflow: hidden;
    background: ${({ theme }) => theme.colors.pageBackground};

    @media (max-width: 1000px) {
        border-radius: 0;
    }
`;

export const Layout = () => {
    const fullScreen = songModel.fullscreen.useFullScreen();
    const [hidePlayer, setHidePlayer] = useState(false);
    useUrlParamId({
        page: 'chat',
        onChangeId: (id) => {
            console.log(id);

            // hide menu after navigating to chat page to avoid flashing on screen
            setHidePlayer(!!id);
        },
    });

    return (
        <>
            <InitialLoading />
            <FullScreenFullScreenPlayer open={fullScreen} />
            <Modal />
            <Popup />
            <LayoutStyled className={hidePlayer ? 'chat-page' : ''}>
                <Sidebar />
                <RightSide>
                    <Outlet />
                </RightSide>
            </LayoutStyled>
            {!hidePlayer && <Player />}
            <MobileMenu />
        </>
    );
};
