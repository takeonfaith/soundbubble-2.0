import { IconSearch } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { playlistModel } from '../../../../entities/playlist/model';
import { Button } from '../../../../shared/components/button';
import { Input } from '../../../../shared/components/input';
import { translate } from '../../../../i18n';

const PlaylistSearchStyled = styled.div`
    width: 100%;
    max-width: 500px;
    height: 45px;
    display: flex;
    align-items: center;
    gap: 4px;
`;

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
        <PlaylistSearchStyled>
            <Input
                icon={<IconSearch />}
                placeholder={translate('playlist_search_placeholder')}
                value={searching.value}
                onChange={(e) => {
                    playlistModel.events.updateSearchValue(e.target.value);
                }}
                ref={searchRef}
                style={{ borderRadius: '6px' }}
            />

            <Button $width="120px" className="outline" onClick={handleCancel}>
                {translate('cancel')}
            </Button>
        </PlaylistSearchStyled>
    );
};
