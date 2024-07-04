import {
    IconArrowLeft,
    IconDiscountCheckFilled,
    IconDotsVertical,
    IconHeadphones,
    IconInfoCircle,
    IconLock,
    IconShare3,
    IconUserPlus,
} from '@tabler/icons-react';
import { LikeButton } from '../../../features/likeButton';
import { popupModel } from '../../../layout/popup/model';
import { formatBigNumber } from '../../funcs/formatBigNumber';
import { Button } from '../button';
import { DefaultContextMenuStyled } from '../defaultContextMenu';
import { Flex } from '../flex';
import { PageTopStyled, TopLeftCorner, TopRightCorner } from './styles';
import { useNavigate } from 'react-router';

type Props = {
    id: string | undefined;
    name: string | undefined;
    numberOfListenersPerMonth: number | undefined;
    subscribers: number | undefined;
    imageComponent: React.ReactNode;
    colors: string[] | undefined;
    isVerified?: boolean;
    isPrivate?: boolean;
    subtitle?: React.ReactNode;
    bottomButtons?: React.ReactNode;
    handleClickShare: () => void;
};

export const PageTop = ({
    name,
    subtitle,
    bottomButtons,
    isPrivate,
    numberOfListenersPerMonth,
    subscribers,
    imageComponent,
    colors,
    isVerified,
    handleClickShare,
}: Props) => {
    const navigate = useNavigate();

    const handleOpenMore = (e: Evt<'btn'>) => {
        e.stopPropagation();

        popupModel.events.open({
            e,
            height: 96,
            content: (
                <DefaultContextMenuStyled>
                    <Button onClick={handleClickShare}>
                        <IconShare3 />
                        Share
                    </Button>
                    <Button>
                        <IconInfoCircle />
                        Info
                    </Button>
                </DefaultContextMenuStyled>
            ),
        });
    };

    return (
        <PageTopStyled $colors={colors}>
            {imageComponent}
            <Flex gap={8} d="column" ai="center">
                <Flex gap={4} d="column">
                    <Flex gap={6}>
                        <h2>{name}</h2>
                        {isVerified && (
                            <IconDiscountCheckFilled color={colors?.[1]} />
                        )}
                        {isPrivate && <IconLock size={20} />}
                    </Flex>
                    {subtitle}
                </Flex>
                <Flex gap={20} style={{ opacity: '0.8', fontWeight: '300' }}>
                    <Flex gap={4}>
                        {formatBigNumber(numberOfListenersPerMonth)}
                        <IconHeadphones size={16} />
                    </Flex>
                    <Flex gap={4}>
                        {formatBigNumber(subscribers)}
                        <IconUserPlus size={16} />
                    </Flex>
                </Flex>
            </Flex>
            <TopLeftCorner>
                <Button
                    $height="40px"
                    $width="40px"
                    onClick={() => navigate(-1)}
                >
                    <IconArrowLeft size={20} />
                </Button>
            </TopLeftCorner>
            <TopRightCorner>
                <LikeButton
                    songId={undefined}
                    likeColor={undefined}
                    height="40px"
                    width="40px"
                />
                <Button $height="40px" $width="40px" onClick={handleOpenMore}>
                    <IconDotsVertical size={20} />
                </Button>
            </TopRightCorner>
            {/* <TopBackground>
				<img src={Wave} />
			</TopBackground> */}
            {bottomButtons}
        </PageTopStyled>
    );
};
