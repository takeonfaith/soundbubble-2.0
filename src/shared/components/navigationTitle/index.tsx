import { IconChevronRight } from '@tabler/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Popover from '../popover';

const NavigationTitleLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 4px;

    @media (hover: hover) {
        &:hover {
            cursor: pointer;

            svg {
                opacity: 1;
            }
        }
    }
`;

type Props = {
    showNavigation: boolean;
    to: string;
    children: React.ReactNode;
};

export const NavigationTitle = ({ showNavigation, to, children }: Props) => {
    if (showNavigation) {
        return (
            <Popover content={'See all'}>
                <NavigationTitleLink to={to}>
                    {children}
                    <IconChevronRight
                        strokeWidth={1.5}
                        size={20}
                        opacity={0.5}
                    />
                </NavigationTitleLink>
            </Popover>
        );
    }

    return children;
};
