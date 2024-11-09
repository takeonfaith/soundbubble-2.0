import { PlaylistItem } from '../../../entities/playlist/ui';
import { ContentWrapper } from '../../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../../shared/components/skeleton/SkeletonPageAnimation';
import { trendsModel } from '../model';
import { Skeleton } from './Skeleton';
import { TopPlates } from './styles';
import { TopPlate } from './TopPlate';

export const TrendsPageAlbums = () => {
    const [albums, loading] = trendsModel.useAlbums();

    return (
        <ContentWrapper>
            <SkeletonPageAnimation loading={loading} skeleton={<Skeleton />}>
                {!!albums.length && (
                    <TopPlates>
                        <TopPlate index={1} entity={albums[0]} />
                        <TopPlate index={2} entity={albums[1]} />
                        <TopPlate index={3} entity={albums[2]} />
                    </TopPlates>
                )}
                {albums.slice(3).map((album) => {
                    return (
                        <PlaylistItem
                            playlist={album}
                            key={album.id}
                            orientation="horizontal"
                        />
                    );
                })}
            </SkeletonPageAnimation>
        </ContentWrapper>
    );
};
