import styled, { useTheme } from 'styled-components';
import { Progress } from '../../shared/components/progress';
import { getPasswordStrength } from './getPasswordStrength';
import { MANDATORY_RULES } from './constansts';
import { CheckIcon } from '../../shared/components/checkIcon';
import { Flex } from '../../shared/components/flex';
import { Subtext } from '../../shared/components/subtext';
import { TTheme } from '../../shared/constants/theme';

const STRENGTH_DIC: Record<number, keyof TTheme['scheme']> = {
    0: 'grey',
    10: 'grey',
    20: 'red',
    60: 'orange',
    100: 'green',
};

const ColorCircle = styled.div<{ color: keyof TTheme['scheme'] }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme, color }) =>
        color ? theme.scheme[color].main : color};
`;

type Props = {
    value: string;
};

export const PasswordStrength = ({ value }: Props) => {
    const theme = useTheme();
    const strength = getPasswordStrength(value);

    return (
        <Flex d="column" ai="flex-start" width="100%" gap={20}>
            <Progress
                value={strength.value / 100}
                color={
                    strength.value === 0
                        ? undefined
                        : theme.scheme[
                              STRENGTH_DIC[
                                  strength.value as keyof typeof STRENGTH_DIC
                              ] as keyof typeof theme.scheme
                          ].main
                }
            />
            {MANDATORY_RULES.map((rule) => {
                return (
                    <Flex gap={8}>
                        <ColorCircle color={STRENGTH_DIC[rule.strength]} />
                        <CheckIcon type="checkbox" checked={rule.test(value)} />
                        <Subtext style={{ fontSize: '0.9rem' }}>
                            {rule.text}
                        </Subtext>
                    </Flex>
                );
            })}
        </Flex>
    );
};
