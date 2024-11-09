import { IconSearch } from '@tabler/icons-react';
import { playlistModel } from '../../../../entities/playlist/model';
import { Button } from '../../../../shared/components/button';
import { Flex } from '../../../../shared/components/flex';
import { Input } from '../../../../shared/components/input';
import { useEffect, useRef } from 'react';

type Props = {
    searching: {
        value: string;
        isSearching: boolean;
    };
};

export const PlaylistSearch = ({ searching }: Props) => {
    const searchRef = useRef<HTMLInputElement>(null);

    const handleCancel = () => {
        playlistModel.events.updateSearchValue('');
        playlistModel.events.updateIsSearching(false);
    };

    useEffect(() => {
        searchRef.current?.focus();
    }, []);

    return (
        <Flex width="100%" gap={4}>
            <Input
                icon={<IconSearch />}
                placeholder="Search for songs in this playlist..."
                value={searching.value}
                onChange={(e) => {
                    playlistModel.events.updateSearchValue(e.target.value);
                }}
                ref={searchRef}
                style={{ borderRadius: '6px' }}
            />

            <Button $width="120px" className="outline" onClick={handleCancel}>
                Cancel
            </Button>
        </Flex>
    );
};
