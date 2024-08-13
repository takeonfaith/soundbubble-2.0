import { useEffect, useState } from 'react';
import { CurrentTabItem, TabItemStyled, TabsStyled } from './styles';

type Props = {
    tabs: { title: string; url: string }[];
    currentTab?: number;
    size?: 's' | 'm' | 'l';
    chips?: boolean;
};

const TABS_HEIGHTS = {
    s: 30,
    m: 38,
    l: 50,
};

export const Tabs = ({ tabs, chips, currentTab = 0, size = 's' }: Props) => {
    const [current, setCurrent] = useState(currentTab);
    const height = TABS_HEIGHTS[size];

    useEffect(() => {
        setCurrent(currentTab);
    }, [currentTab]);

    return (
        <TabsStyled className={chips ? 'chips' : ''}>
            <CurrentTabItem
                $width={`${100 / tabs.length}%`}
                $shift={current}
                $height={`${height}px`}
                className={chips ? 'chips' : ''}
            />
            {tabs.map(({ title, url }, index) => (
                <TabItemStyled
                    key={title + index}
                    to={url}
                    $height={`${height}px`}
                    $width={`calc(100% / ${tabs.length})`}
                    className={`${chips ? 'chips' : ''} ${
                        index === current ? 'selected' : ''
                    }`}
                    onClick={() => setCurrent(index)}
                >
                    {title}
                </TabItemStyled>
            ))}
        </TabsStyled>
    );
};
