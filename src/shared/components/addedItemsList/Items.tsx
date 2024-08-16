import { IconCircleXFilled } from '@tabler/icons-react';
import React from 'react';
import { CompactUser } from '../../../features/shareModal/styles';
import { Button } from '../button';
import { Flex } from '../flex';

type Props<T extends { id?: string; uid?: string }> = {
    added: string[];
    allItems: T[];
    itemImage: (item: T) => React.ReactNode;
    itemName: (item: T) => string;
    setAdded: React.Dispatch<React.SetStateAction<string[]>>;
};

export const Items = <T extends { id?: string; uid?: string }>({
    added,
    allItems,
    itemImage,
    itemName,
    setAdded,
}: Props<T>) => {
    const handleRemoveChosen = (userId: string) => {
        return () => {
            setAdded((prev) => prev.filter((id) => id !== userId));
        };
    };

    return (
        <Flex wrap="wrap" width="100%" gap={4}>
            {added.map((id) => {
                const item = allItems.find(
                    (item) => (item.id ?? item.uid ?? '') === id
                );

                if (!item) return null;

                return (
                    <CompactUser>
                        {itemImage(item)}
                        {itemName(item)}
                        <Button
                            $width="20px"
                            $height="20px"
                            onClick={handleRemoveChosen(id)}
                        >
                            <IconCircleXFilled size={18} />
                        </Button>
                    </CompactUser>
                );
            })}
        </Flex>
    );
};
