import { IconArrowUpLeft, IconHistory, IconSearch } from '@tabler/icons-react';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { HintIcon, HintItemStyled, HintName } from './styles';
import { TExtendedSuggestion } from './types';

type Props = {
    item: TExtendedSuggestion;
    suggestedIndex?: number | null;
    icon?: React.ReactNode;
    searchHistory?: boolean;
    isSelected: boolean;
    disableCopyButton?: boolean;
    handleCopyName: (name: string) => void;
    handleSubmitSuggestion: () => void;
};

export const HintItem = ({
    item,
    icon,
    isSelected,
    searchHistory,
    disableCopyButton,
    handleSubmitSuggestion,
    handleCopyName,
}: Props) => {
    const hintIcon = item.icon ? item.icon : icon ? icon : <IconSearch />;
    const hintName = item.fullName;
    const showCover = false;

    const handleCopy = (e: Evt<'btn'>) => {
        e.stopPropagation();
        handleCopyName(hintName);
    };

    return (
        <HintItemStyled
            tabIndex={0}
            className={isSelected ? 'selected' : ''}
            onClick={handleSubmitSuggestion}
        >
            <Flex gap={8} width="100%">
                {searchHistory && (
                    <HintIcon>
                        <IconHistory />
                    </HintIcon>
                )}
                {!searchHistory && !showCover && !!hintIcon && (
                    <HintIcon>{hintIcon}</HintIcon>
                )}
                <Flex d="column" ai="flex-start">
                    <HintName>{hintName}</HintName>
                </Flex>
            </Flex>
            {!disableCopyButton && (
                <Button $width="42px" onClick={handleCopy}>
                    <IconArrowUpLeft size={20} />
                </Button>
            )}
        </HintItemStyled>
    );
};
