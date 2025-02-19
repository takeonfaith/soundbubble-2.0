import { IconCheck, IconChevronDown } from '@tabler/icons-react';
import React from 'react';
import { Popup } from '../../../layout/newpopup';
import { Flex } from '../flex';
import { Subtext } from '../subtext';
import { SelectItemsStyled, SelectItemStyled, SelectStyled } from './styles';
import { InputError, Label, Required } from '../input/styles';

export type TSelectItem = {
    title: string;
    subtext?: string;
    icon?: React.ReactNode;
};

type Props<T extends TSelectItem> = {
    items: T[];
    icon?: React.ReactNode;
    placeholder?: string;
    label?: string;
    error?: string;
    required?: boolean;
    selected: Nullable<T['title']>;
    onSelect: (selected: T) => void;
};

export const Select = <T extends TSelectItem>({
    items,
    icon,
    onSelect,
    selected,
    label,
    required,
    error,
    placeholder,
}: Props<T>) => {
    return (
        <Popup
            position="bottom"
            content={
                <SelectItemsStyled>
                    {items.map((item) => (
                        <SelectItemStyled
                            onClick={() => onSelect(item)}
                            tabIndex={1}
                        >
                            <Flex d="column" gap={0} ai="flex-start">
                                <div className="select-item-title">
                                    {item.title}
                                </div>
                                {item.subtext && (
                                    <Subtext>{item.subtext}</Subtext>
                                )}
                            </Flex>
                            {selected === item.title && (
                                <IconCheck className="check" />
                            )}
                        </SelectItemStyled>
                    ))}
                </SelectItemsStyled>
            }
        >
            <Flex d="column" ai="flex-start">
                {label && (
                    <Label>
                        {error && <InputError>{error}</InputError>}
                        {!error && (
                            <>
                                {label}{' '}
                                <Required>{required ? '*' : ''}</Required>
                            </>
                        )}
                    </Label>
                )}
                <SelectStyled className={error ? 'has-error' : ''}>
                    <Flex width="calc(100% - 25px)" gap={8}>
                        {icon}
                        {!selected && (
                            <div className="placeholder"> {placeholder}</div>
                        )}
                        {selected && <div className="selected">{selected}</div>}
                    </Flex>
                    <IconChevronDown className="chevron" size={16} />
                </SelectStyled>
            </Flex>
        </Popup>
    );
};
