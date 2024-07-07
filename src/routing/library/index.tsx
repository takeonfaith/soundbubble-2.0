import { IconSearch } from '@tabler/icons-react';
import { Outlet, useLocation } from 'react-router';
import { Header } from '../../layout/header';
import { Flex } from '../../shared/components/flex';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { Tabs } from '../../shared/components/tabs';
import { SearchButton } from './styles';

const TABS = [
    { title: 'Songs', url: '' },
    { title: 'Playlists', url: 'playlists' },
    { title: 'Authors', url: 'authors' },
];

export const Library = () => {
    const location = useLocation();
    const initialCurrentTab = TABS.findIndex(
        (a) => a.url === location.pathname.split('/').at(-1)
    );

    return (
        <PageWrapper>
            <Header>
                <Flex width="100%" jc="center" gap={10}>
                    <Tabs
                        tabs={TABS}
                        currentTab={
                            initialCurrentTab === -1 ? 0 : initialCurrentTab
                        }
                    />
                    <SearchButton>
                        <IconSearch />
                    </SearchButton>
                </Flex>
            </Header>
            <Outlet />
        </PageWrapper>
    );
};
