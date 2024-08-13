import { TablerIconsProps } from '@tabler/icons-react';
import React from 'react';
import { Flex } from '../flex';
import { Subtext } from '../subtext';
import { PageMessageStyled } from './styles';

type Props = {
    icon: (props: TablerIconsProps) => JSX.Element;
    title: string;
    description: string;
    children?: React.ReactNode;
};

export const PageMessage = ({
    icon: Icon,
    title = 'Error',
    description = 'Error description',
    children,
}: Props) => {
    return (
        <PageMessageStyled>
            <Icon size={90} opacity={0.3} />
            <Flex d="column" gap={8}>
                <h3>{title}</h3>
                <Subtext style={{ fontSize: '1rem' }}>{description}</Subtext>
            </Flex>
            {children}
        </PageMessageStyled>
    );
};
