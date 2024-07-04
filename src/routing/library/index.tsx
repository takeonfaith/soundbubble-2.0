import { IconSearch } from '@tabler/icons-react';
import { Outlet, useLocation } from 'react-router';
import styled from 'styled-components';
import { Header } from '../../layout/header';
import { Flex } from '../../shared/components/flex';
import { Tabs } from '../../shared/components/tabs';
import { SearchButton } from './styles';

const LibraryStyled = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-bottom: 20px;
`;

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
        <LibraryStyled>
            <Header>
                <Flex width="100%" jc='center' gap={10}>
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
        </LibraryStyled>
    );
};
