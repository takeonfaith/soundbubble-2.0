/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck IDGAF

import React from 'react';
import { getPasswordStrength } from './getPasswordStrength';
import { Progress } from '../../shared/components/progress';
import { useTheme } from 'styled-components';

const STRENGTH_DIC = {
    0: 'grey',
    10: 'red',
    20: 'red',
    60: 'orange',
    100: 'green',
};

export const PasswordStrength = () => {
    const [value] = React.useState('1wWqdasdasddmda@');
    const theme = useTheme();
    const strength = getPasswordStrength(value);
    console.log(strength);

    return (
        <>
            <Progress
                value={strength.value / 100}
                color={
                    strength.value === 0
                        ? undefined
                        : theme.scheme[
                              STRENGTH_DIC[
                                  strength.value
                              ] as keyof typeof theme.scheme
                          ].main
                }
            />
        </>
    );
};
