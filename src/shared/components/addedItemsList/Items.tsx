import { IconCircleXFilled } from '@tabler/icons-react';
import React from 'react';
import { CompactUser } from '../../../features/shareModal/styles';
import { Button } from '../button';
import { Flex } from '../flex';
import { SkeletonShape } from '../skeleton';

type Props<T extends { id?: string; uid?: string }> = {
    added: T[];
    loading?: boolean;
    itemImage?: (item: T) => React.ReactNode;
    itemName: (item: T) => string;
    setAdded: (items: T[]) => void;
};

export const Items = <T extends { id?: string; uid?: string }>({
    added,
    itemImage,
    itemName,
    setAdded,
    loading,
}: Props<T>) => {
    const handleRemoveChosen = (userId: string | undefined) => {
        return () => {
            setAdded(added.filter(({ uid, id }) => (uid ?? id) !== userId));
        };
    };

    return (
        <Flex wrap="wrap" width="100%" gap={4}>
            {loading && (
                <>
                    <SkeletonShape width="100px" height="25px" radius="25px" />
                    <SkeletonShape width="100px" height="25px" radius="25px" />
                    <SkeletonShape width="100px" height="25px" radius="25px" />
                </>
            )}
            {!loading &&
                added.map((obj) => {
                    const { id, uid } = obj;
                    return (
                        <CompactUser
                            className={`${!itemImage?.(obj) ? 'no-image' : ''}`}
                        >
                            <Flex gap={4}>
                                {itemImage?.(obj)}
                                {itemName(obj)}
                            </Flex>
                            <Button
                                $width="20px"
                                $height="20px"
                                onClick={handleRemoveChosen(uid ?? id)}
                            >
                                <IconCircleXFilled size={18} />
                            </Button>
                        </CompactUser>
                    );
                })}
        </Flex>
    );
};
