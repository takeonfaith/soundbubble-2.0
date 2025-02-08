import { IconMusic } from '@tabler/icons-react';
import { createPlaylistObject } from '../../entities/playlist/lib/createPlaylistObject';
import { PlaylistItem } from '../../entities/playlist/ui';
import { TQueue } from '../../entities/song/model/types';
import { createAuthorObject } from '../../entities/user/lib/createAuthorObject';
import { createUserObject } from '../../entities/user/lib/createUserObject';
import { UserItem } from '../../entities/user/ui';
import { allRoutes } from '../../routing/routes';
import { IconText } from '../../shared/components/iconText';
import { SidebarLink } from '../sidebar/styles';

type Props = { queue: TQueue | null; onClick: () => void };

export const QueueOrigin = ({ queue, onClick }: Props) => {
    if (!queue) return null;

    if (queue.url?.includes('author')) {
        const uid = queue.url.split('/author/').pop();

        return (
            <UserItem
                onClick={onClick}
                orientation="horizontal"
                user={createUserObject({
                    uid,
                    displayName: queue.name ?? undefined,
                    photoURL: queue.imageUrl ?? undefined,
                    isAuthor: true,
                })}
            />
        );
    }

    if (queue.url?.includes('user')) {
        const uid = queue.url.split('/user/').pop();

        return (
            <UserItem
                onClick={onClick}
                orientation="horizontal"
                user={createUserObject({
                    uid,
                    displayName: queue.name ?? undefined,
                    photoURL: queue.imageUrl ?? undefined,
                    isAuthor: false,
                    isVerified: false,
                })}
            />
        );
    }

    if (queue.url?.includes('playlist')) {
        const id = queue.url.split('/playlist/').pop();
        const playlist = createPlaylistObject(createAuthorObject({}), {
            id,
            name: queue.name,
            image: queue.imageUrl,
        });

        return (
            <PlaylistItem
                isAuthor
                orientation="horizontal"
                playlist={playlist}
                onClick={onClick}
            />
        );
    }

    if (queue.url?.includes('album')) {
        const id = queue.url.split('/album/').pop();
        const playlist = createPlaylistObject(createAuthorObject({}), {
            id,
            name: queue.name,
            image: queue.imageUrl,
            isAlbum: true,
        });

        return (
            <PlaylistItem
                isAuthor
                orientation="horizontal"
                playlist={playlist}
                onClick={onClick}
            />
        );
    }

    if (queue.url?.includes('song')) {
        return (
            <SidebarLink to={queue.url} onClick={onClick}>
                <IconText icon={<IconMusic />} text={queue.name} />
            </SidebarLink>
        );
    }

    const route = allRoutes.find((route) => {
        return queue.url.split('/').includes(route.url);
    });

    if (route) {
        return (
            <SidebarLink to={queue.url} onClick={onClick}>
                <IconText icon={route.icon} text={route.title} />
            </SidebarLink>
        );
    }

    return (
        <SidebarLink onClick={onClick} to={queue.url}>
            {queue.name}
        </SidebarLink>
    );
};
