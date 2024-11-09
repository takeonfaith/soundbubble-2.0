import { Outlet, useLocation } from 'react-router';
import { Header } from '../../../layout/header';
import { PageWrapper } from '../../../shared/components/pageWrapper';
import { Tabs } from '../../../shared/components/tabs';

const TABS = [
    { title: 'Songs', url: '' },
    { title: 'Authors', url: 'authors' },
    { title: 'Albums', url: 'albums' },
];

export const TrendsPage = () => {
    const location = useLocation();
    const initialCurrentTab = TABS.findIndex(
        (a) => a.url === location.pathname.split('/').at(-1)
    );

    return (
        <PageWrapper>
            <Header>
                <Tabs
                    tabs={TABS}
                    currentTab={
                        initialCurrentTab === -1 ? 0 : initialCurrentTab
                    }
                />
            </Header>
            <Outlet />
        </PageWrapper>
    );
};
