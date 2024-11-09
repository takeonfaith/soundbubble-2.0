import { useEffect, useState } from 'react';
import { CurrentTabItem, TabItemStyled, TabsStyled } from './styles';

export type TTab = { title: string; url: string };

type Props = {
    tabs: TTab[];
    currentTab?: number;
    size?: 's' | 'm' | 'l';
    chips?: boolean;
    onTabClick?: (tab: TTab) => void;
};

const TABS_HEIGHTS = {
    s: 30,
    m: 38,
    l: 50,
};

export const Tabs = ({
    tabs,
    chips,
    onTabClick,
    currentTab = 0,
    size = 's',
}: Props) => {
    const [current, setCurrent] = useState(currentTab);
    const height = TABS_HEIGHTS[size];

    const handleTabClick = (tab: TTab) => {
        return () => onTabClick?.(tab);
    };

    useEffect(() => {
        setCurrent(currentTab);
    }, [currentTab]);

    return (
        <TabsStyled className={chips ? 'chips' : ''}>
            <CurrentTabItem
                $width={`calc(${(100 / tabs.length).toFixed(0)}% - 2px)`}
                $shift={`calc(100% * ${current})`}
                $height={`${height}px`}
                className={chips ? 'chips' : ''}
            />
            {tabs.map((tab, index) => {
                const { title, url } = tab;
                return (
                    <TabItemStyled
                        key={title + index}
                        to={url}
                        $height={`${height}px`}
                        $width={`calc(100% / ${tabs.length})`}
                        className={`${chips ? 'chips' : ''} ${
                            index === current ? 'selected' : ''
                        }`}
                        onClick={handleTabClick(tab)}
                    >
                        {title}
                    </TabItemStyled>
                );
            })}
        </TabsStyled>
    );
};
