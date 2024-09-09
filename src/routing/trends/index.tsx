import { useState } from 'react';
import { Database } from '../../database';
import { TSong } from '../../entities/song/model/types';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { Header } from '../../layout/header';
import {
    ContentWrapper,
    PageWrapper,
} from '../../shared/components/pageWrapper';
import { Tabs } from '../../shared/components/tabs';
import { useEffectOnce } from '../../shared/hooks/useEffectOnce';
import { Loading } from '../../shared/components/loading';

export const TrendsPage = () => {
    const [songs, setSongs] = useState<TSong[]>([]);
    const [loading, setLoading] = useState(false);
    useEffectOnce(() => {
        setLoading(true);
        Database.Songs.getTopSongs(20).then((res) => {
            setSongs(res);
            setLoading(false);
        });
    }, []);

    return (
        <PageWrapper>
            <Header>
                <Tabs
                    tabs={[
                        { title: 'Songs', url: 'top-20-songs' },
                        { title: 'Authors', url: 'top-20-authors' },
                        { title: 'Albums', url: 'top-20-albums' },
                    ]}
                />
            </Header>
            <ContentWrapper>
                {loading && <Loading />}
                <VerticalSongsList
                    songs={songs}
                    listName={null}
                    listIcon={undefined}
                    listUrl={null}
                    showSerialNumber
                />
            </ContentWrapper>
        </PageWrapper>
    );
};
