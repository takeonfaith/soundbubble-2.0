import { useState } from 'react';
import { Database } from '../../database';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';
import { TSong } from '../../entities/song/model/types';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { useEffectOnce } from '../../shared/hooks/useEffectOnce';
import { Loading } from '../../shared/components/loading';
import { ContentWrapper } from '../../shared/components/pageWrapper';

export const TrendsPageSongs = () => {
    const [songs, setSongs] = useState<TSong[]>([]);
    const [loading, setLoading] = useState(false);

    useEffectOnce(() => {
        setLoading(true);
        Database.Songs.getTopSongs(20).then((res) => {
            setSongs(res);
            setLoading(false);
        });
    }, []);

    const queue = createQueueObject({
        name: 'Trends',
        url: '/trends',
        songs,
    });
    return (
        <ContentWrapper>
            {loading && <Loading />}
            <VerticalSongsList queue={queue} />
        </ContentWrapper>
    );
};
