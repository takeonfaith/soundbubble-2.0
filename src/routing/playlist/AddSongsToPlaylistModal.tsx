import { useState } from 'react';
import { GlobalSearch } from '../../features/globalSearch';
import { SearchWithHints } from '../../features/searchWithHints';

export const AddSongsToPlaylistModal = () => {
    const [value, setValue] = useState('');

    return (
        <div>
            <GlobalSearch queryValue={value} where={'songs'} />
        </div>
    );
};
