/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useMatch } from 'react-router';

type Props = {
    page: 'song' | 'playlist' | 'album' | 'author' | 'chats' | 'user';
    onChangeId: (id: string | undefined) => void;
};

export const useUrlParamId = ({ page, onChangeId }: Props) => {
    const match = useMatch(`${page}/:id`);

    useEffect(() => {
        onChangeId(match?.params.id);
    }, [match?.params.id]);

    return match?.params.id;
};
