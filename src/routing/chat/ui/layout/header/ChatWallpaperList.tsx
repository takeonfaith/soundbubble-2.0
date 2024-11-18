import { IconCircleCheckFilled } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { chatModel } from '../../../../../entities/chat/model';
import { LoadingOverlay } from '../../../../../entities/song/ui/styles';
import { DefaultButton } from '../../../../../shared/components/button/DefaultButton';
import { Flex } from '../../../../../shared/components/flex';
import { SkeletonShape } from '../../../../../shared/components/skeleton';
import { SkeletonPageAnimation } from '../../../../../shared/components/skeleton/SkeletonPageAnimation';

const ChatWallpaperListStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 170px;
    gap: 2px;
    position: relative;
    border-radius: 10px;
    user-select: none;
`;

const WallpaperItem = styled.img`
    height: 170px;
    object-fit: cover;
    background: ${({ theme }) => theme.colors.input};
    border: none;
    transition: 0.2s;
`;

const WallpaperWrapper = styled.div`
    width: 100%;
    max-height: 170px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1px;
    position: relative;
    cursor: pointer;

    &:hover {
        ${WallpaperItem} {
            transform: scale(1.1);
            filter: brightness(0.8);
        }
    }

    svg {
        width: 50px;
        height: 50px;
        color: ${({ theme }) => theme.scheme.blue.action};
    }
`;

const Skeleton = () => {
    return (
        <ChatWallpaperListStyled style={{ margin: 0 }}>
            {Array.from(Array(9)).map(() => {
                return (
                    <WallpaperWrapper>
                        <SkeletonShape width="100%" height="160px" radius="0" />
                    </WallpaperWrapper>
                );
            })}
        </ChatWallpaperListStyled>
    );
};

export const ChatWallpaperList = () => {
    const [currentChat] = chatModel.useCurrentChat();
    const [wallpapers, loading] = chatModel.useWallpapers();
    const [newWallpaper, setNewWallpaper] = useState<string | undefined>(
        currentChat?.wallpaper
    );

    const handleSelectWallpaper = (wallpaper: string) => {
        return () => {
            if (newWallpaper === wallpaper) {
                setNewWallpaper(currentChat?.wallpaper);
                return;
            }

            setNewWallpaper(wallpaper);
        };
    };

    useEffect(() => {
        chatModel.events.loadWallpapers();
    }, []);

    return (
        <Flex d="column" gap={45}>
            <ChatWallpaperListStyled>
                <SkeletonPageAnimation
                    skeleton={<Skeleton />}
                    loading={loading}
                >
                    {wallpapers.map((wallpaper, index) => {
                        const isChosen =
                            newWallpaper === wallpaper.image ||
                            wallpaper.image === currentChat?.wallpaper;

                        return (
                            <WallpaperWrapper
                                key={index}
                                onClick={handleSelectWallpaper(wallpaper.image)}
                            >
                                {isChosen && (
                                    <LoadingOverlay>
                                        <IconCircleCheckFilled />
                                    </LoadingOverlay>
                                )}
                                <WallpaperItem src={wallpaper.image} />
                            </WallpaperWrapper>
                        );
                    })}
                </SkeletonPageAnimation>
            </ChatWallpaperListStyled>
            {newWallpaper !== currentChat?.wallpaper && (
                <Flex padding="0 20px" width="100%">
                    <DefaultButton appearance="primary">
                        Save wallpaper
                    </DefaultButton>
                </Flex>
            )}
        </Flex>
    );
};
