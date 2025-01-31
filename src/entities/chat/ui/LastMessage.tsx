import { getEntityName } from '../../../features/searchWithHints/lib/getDividedEntity';
import { SkeletonShape } from '../../../shared/components/skeleton';
import { ENTITIES_ICONS } from '../../../shared/constants/icons';
import { TEntity } from '../../search/model/types';
import { TUser } from '../../user/model/types';
import { getLastMessageSender } from '../lib/getLastMessageSender';
import { TCache, TMessage } from '../model/types';
import { LastMessageAttachmentStyled, LastMessageTextStyled } from './styles';

type Props = {
    cache: TCache;
    lastMessage: Nullable<TMessage>;
    isGroupChat: boolean;
    currentUser: TUser | null;
};

const getEntityObject = (
    ids: string[] | undefined,
    cache: TCache
): [string | null, boolean] => {
    if (!ids || !ids[0]) return [null, false];

    const entity = ids.length !== 0 ? (cache[ids[0] ?? ''] as TEntity) : null;

    if (!entity) return [null, false];

    const isLoading = (ids.length ?? 0) > 0 && !entity;

    const name = getEntityName(entity);

    return [name, isLoading];
};

export const LastMessage = ({
    cache,
    lastMessage,
    isGroupChat,
    currentUser,
}: Props) => {
    const [song, isLoadingSong] = getEntityObject(
        lastMessage?.attachedSongs,
        cache
    );
    const [author, isLoadingAuthor] = getEntityObject(
        lastMessage?.attachedAuthors,
        cache
    );
    const [album, isLoadingAlbum] = getEntityObject(
        lastMessage?.attachedAlbums,
        cache
    );

    const isLoading = isLoadingSong || isLoadingAlbum || isLoadingAuthor;

    const { sender } = getLastMessageSender(
        lastMessage,
        isGroupChat,
        cache,
        currentUser
    );
    return (
        <LastMessageTextStyled>
            {sender && `${sender}:`} {lastMessage?.message.substring(0, 70)}{' '}
            {(lastMessage?.message?.length ?? 0) > 70 ? '...' : ''}
            {isLoading && (
                <SkeletonShape
                    style={{ display: 'inline-block', marginTop: '3px' }}
                    width="100px"
                    height="12px"
                />
            )}
            {song && (
                <LastMessageAttachmentStyled>
                    {ENTITIES_ICONS.song}
                    {song}
                </LastMessageAttachmentStyled>
            )}
            {author && (
                <LastMessageAttachmentStyled>
                    {ENTITIES_ICONS.author}
                    {author}
                </LastMessageAttachmentStyled>
            )}
            {album && (
                <LastMessageAttachmentStyled>
                    {ENTITIES_ICONS.album}
                    {album}
                </LastMessageAttachmentStyled>
            )}
        </LastMessageTextStyled>
    );
};
