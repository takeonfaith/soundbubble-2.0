import styled from 'styled-components';
import { Flex } from '../../shared/components/flex';
import { useGetAppHotKeys } from '../../shared/hooks/useGetAppHotKeys';
import { THotKeys } from '../../shared/hooks/useHotKeys';

const HotkeysListStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(10, 1fr);
    column-gap: 20px;
    padding: 20px 25px;
    grid-auto-flow: column;

    .hotkey {
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};
        height: 100%;
        padding: 8px 0;

        span {
            font-weight: 200;
            font-size: 0.9rem;
            opacity: 0.8;
        }

        svg {
            min-width: 15px;
            width: 15px;
            height: 15px;
        }
    }
`;

export const HotkeysList = () => {
    const hotkeys = useGetAppHotKeys();
    return (
        <HotkeysListStyled>
            {Object.keys(hotkeys).map((key) => {
                const keyBody = hotkeys?.[key as keyof THotKeys];
                return (
                    <Flex
                        className="hotkey"
                        gap={10}
                        width="100%"
                        jc="space-between"
                    >
                        <span>{keyBody?.description}</span>
                        <kbd>{keyBody?.name ?? key}</kbd>
                    </Flex>
                );
            })}
        </HotkeysListStyled>
    );
};
