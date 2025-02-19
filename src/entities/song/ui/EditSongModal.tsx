import { IconChevronRight } from '@tabler/icons-react';
import { Button } from '../../../shared/components/button';
import { Input } from '../../../shared/components/input';
import { PhotoInput } from '../../../shared/components/photoInput';
import { TLyric, TSong } from '../model/types';
import { Tabs } from '../../../shared/components/tabs';
import { modalModel } from '../../../layout/modal/model';
import { Flex } from '../../../shared/components/flex';
import { Textarea } from '../../../shared/components/textarea';

import { useState, useEffect } from 'react';
import { Database } from '../../../database';
import { Loading } from '../../../shared/components/loading';
import { DefaultButton } from '../../../shared/components/button/DefaultButton';
import { translate } from '../../../i18n';

const EditLyricsModal = ({ song }: Props) => {
    const [lyrics, setLyrics] = useState<TLyric[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        Database.Songs.loadLyrics(song.id)
            .then((lyrics) => {
                setLyrics(
                    lyrics.filter(
                        (lyric) =>
                            lyric.text !== '@loading' && lyric.text !== '@end'
                    )
                );
            })
            .finally(() => {
                setLoading(false);
            });
    }, [song.id]);

    return (
        <Flex
            width="100%"
            height="100%"
            d="column"
            padding="0 20px 20px 20px"
            gap={12}
        >
            <Tabs
                tabs={[
                    { title: 'Lyrics', url: '' },
                    { title: 'Karaoke', url: '' },
                ]}
            />
            {loading && <Loading />}
            {!loading && (
                <Textarea
                    placeholder="lyrics"
                    style={{ maxHeight: 'none', height: '100%' }}
                    cols={50}
                    value={lyrics.map((l) => `${l.text}`).join('\n')}
                />
            )}
            <DefaultButton appearance="primary">
                {translate('save_changes')}
            </DefaultButton>
        </Flex>
    );
};

type Props = {
    song: TSong;
};

export const EditSongModal = ({ song }: Props) => {
    if (!song) return null;
    return (
        <Flex d="column" padding="20px" gap={12} width="100%">
            <PhotoInput
                file={null}
                colors={[]}
                onUpload={() => null}
                onColors={() => null}
            />
            <Input placeholder="Ente song name..." label="Song name" />
            <Input
                placeholder="Ente song name..."
                label="Release date"
                type="date"
            />
            <Button
                className="outline"
                onClick={() =>
                    modalModel.events.open({
                        content: <EditLyricsModal song={song} />,
                        title: 'Edit lyrics',
                        sizeY: 'l',
                    })
                }
            >
                Lyrics <IconChevronRight size={16} />
            </Button>
        </Flex>
    );
};
