import { Outlet, useLocation } from 'react-router';
import { userModel } from '../../entities/user/model';
import { Header } from '../../layout/header';
import { Flex } from '../../shared/components/flex';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { Tabs } from '../../shared/components/tabs';
import { translate } from '../../i18n';

const TABS = [
    { title: translate('songs'), url: '' },
    { title: translate('playlists'), url: 'playlists' },
    { title: translate('albums'), url: 'albums' },
    { title: translate('authors'), url: 'authors' },
];

export const Library = () => {
    const location = useLocation();
    const initialCurrentTab = TABS.findIndex(
        (a) => a.url === location.pathname.split('/').at(-1)
    );
    const [currentUser] = userModel.useUser();

    return (
        <PageWrapper>
            <Header>
                {!!currentUser && (
                    <Flex width="100%" jc="center" gap={10}>
                        <Tabs
                            tabs={TABS}
                            currentTab={
                                initialCurrentTab === -1 ? 0 : initialCurrentTab
                            }
                        />
                    </Flex>
                )}
            </Header>
            <Outlet />
        </PageWrapper>
    );
};
