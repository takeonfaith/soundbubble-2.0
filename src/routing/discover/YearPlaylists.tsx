import styled from 'styled-components';
import { createPlaylistObject } from '../../entities/playlist/lib/createPlaylistObject';
import { PlaylistItem } from '../../entities/playlist/ui';
import { createAuthorObject } from '../../entities/user/lib/createAuthorObject';
import { userModel } from '../../entities/user/model';
import { TTheme } from '../../shared/constants/theme';
import { BeautifulBackground } from '../../shared/components/beautifulBackground';
import { HorizontalList } from '../../shared/components/horizontalList';
import { NavigationTitle } from '../../shared/components/navigationTitle';

const YearPlaylistsStyled = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;

    .title {
        padding: var(--page-padding);
        padding-bottom: 0;

        h3 {
            font-weight: 400;
				font-size: 1.3rem;
        }
    }

    & .horizontal-list {
        padding: 0 var(--page-padding);
        padding-bottom: 70px;
    }

    @media (max-width: 768px) {
        & .horizontal-list {
            padding: 0;
        }
    }
`;

const YearPlaylistItem = styled(BeautifulBackground)<{
    color: keyof TTheme['scheme'];
}>`
    width: var(--size);
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    height: var(--size);
    flex-direction: column;
    padding: 14px 20px;
    position: relative;
    border-radius: 11px;
    background-size: 150%150%;
    color: #fff;
    z-index: 0;

    .text {
        font-size: 1.8vw;
        opacity: 0.5;
        font-weight: 500;
        z-index: 1;
    }

    .year {
        font-weight: 600;
        font-size: 3vw;
        margin: 0;
        z-index: 1;
    }

    @media (max-width: 768px) {
        .text {
            font-weight: 400;
            font-size: 1.5rem;
        }

        .year {
            font-weight: 500;
            font-size: 2rem;
        }
    }
`;

const COLORS: Record<number, string[]> = {
    2025: ['#a665e3', '#702bb1', '#dfbcff', '#a665e3', '##2a024f', '#dfbcff'],
    2024: ['#6572e3', '#5f5df1', '#bce2ff', '#657ee3', '##2a4195', '#bcceff'],
    2023: ['#65e3a8', '#5df1b1', '#bcffd7', '#67e365', '##2a9565', '#c4ffbc'],
    2022: ['#b5e365', '#c7f15d', '#ffffbc', '#b5e365', '##78952a', '#f8ffbc'],
    2021: ['#e37a65', '#f1915d', '#ffc5bc', '#e36565', '##957c2a', '#ffdcbc'],
};

export const YearPlaylists = () => {
    const [currentUser] = userModel.useUser();

    if (!currentUser) return null;

    const years =
        new Date().getFullYear() -
        (currentUser?.regDate.toDate().getFullYear() ??
            new Date().getFullYear());

    return (
        <YearPlaylistsStyled>
            <div className="title">
                <NavigationTitle showNavigation={false} to="">
                    <h3>My year playlists</h3>
                </NavigationTitle>
            </div>
            <HorizontalList overflowColor="transparent">
                {Array.from({ length: years + 1 }, () => 0).map((_, i) => {
                    const y = new Date();
                    if (i !== 0) {
                        y.setFullYear(y.getFullYear() - i);
                    }

                    const colors = COLORS[y.getFullYear()] ?? COLORS[2021];

                    const playlist = createPlaylistObject(
                        createAuthorObject({ displayName: 'Soundbubble' }),
                        {
                            id: `year-${y.getFullYear()}`,
                            songs: [],
                            isAlbum: false,
                            isPrivate: false,
                            name: `Year ${y.getFullYear()}`,
                            imageColors: colors,
                        }
                    );
                    return (
                        <PlaylistItem
                            isAuthor
                            playlist={playlist}
                            key={playlist.id}
                            imagePlaceholder={
                                <YearPlaylistItem $colors={colors}>
                                    <span className="text">My year</span>
                                    <span className="year">
                                        {y.getFullYear()}
                                    </span>
                                </YearPlaylistItem>
                            }
                        />
                    );
                })}
            </HorizontalList>
        </YearPlaylistsStyled>
    );
};
