import { useEffect, useState } from 'react';
import { CurrentTabItem, TabItemStyled, TabsStyled } from './styles';

type Props = {
    tabs: { title: string; url: string }[];
    currentTab?: number;
};

export const Tabs = ({ tabs, currentTab = 0 }: Props) => {
    const [current, setCurrent] = useState(currentTab);

    useEffect(() => {
        setCurrent(currentTab);
    }, [currentTab]);

    return (
        <TabsStyled>
            <CurrentTabItem $width={`${100 / tabs.length}%`} $shift={current} />
            {tabs.map(({ title, url }, index) => (
                <TabItemStyled
                    key={title + index}
                    to={url}
                    className={index === current ? 'selected' : ''}
                >
                    {title}
                </TabItemStyled>
            ))}
        </TabsStyled>
    );
};
