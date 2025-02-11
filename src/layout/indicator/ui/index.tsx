import { useUnit } from 'effector-react';
import { IndicatorStyled } from './styles';
import { $content } from '../model/indicator';

export const Indicator = () => {
    const [content] = useUnit([$content]);

    if (!content) return null;

    return <IndicatorStyled>{content}</IndicatorStyled>;
};
