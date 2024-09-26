import { createPlaylistObject } from '../../entities/playlist/lib/createPlaylistObject';
import { PlaylistItem } from '../../entities/playlist/ui';
import { TQueue } from '../../entities/song/model/types';
import { songModel } from '../../entities/song/model';
import { createUserObject } from '../../entities/user/lib/createUserObject';
import { UserItem } from '../../entities/user/ui';
import { allRoutes } from '../../routing/routes';
import { SidebarLink } from '../sidebar/styles';
import { IconText } from '../../shared/components/iconText';

type Props = { queue: TQueue | null };

export const QueueOrigin = ({ queue }: Props) => {
    if (!queue) return null;

    if (queue.url?.includes('author')) {
        const uid = queue.url.split('/author/').pop();

        return (
            <UserItem
                onClick={() => songModel.fullscreen.close()}
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
                onClick={() => songModel.fullscreen.close()}
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
        const playlist = createPlaylistObject({
            id,
            name: queue.name,
            image: queue.imageUrl,
        });

        return <PlaylistItem orientation="horizontal" playlist={playlist} />;
    }

    if (queue.url?.includes('album')) {
        const id = queue.url.split('/album/').pop();
        const playlist = createPlaylistObject({
            id,
            name: queue.name,
            image: queue.imageUrl,
            isAlbum: true,
        });

        return <PlaylistItem orientation="horizontal" playlist={playlist} />;
    }

    const route = allRoutes.find((route) => {
        console.log(route.url, queue.url, route.url.includes(queue.url));

        return queue.url.split('/').includes(route.url);
    });

    if (route) {
        return (
            <SidebarLink to={queue.url}>
                <IconText icon={route.icon} text={route.title} />
            </SidebarLink>
        );
    }

    return <SidebarLink to={queue.url}>{queue.name}</SidebarLink>;
};
