import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Database } from '../../database';
import { TUser } from '../../entities/user/model/types';
import { UserSkeleton } from '../../entities/user/ui/Skeleton';
import { modalModel } from '../../layout/modal/model';
import { AttachEntity } from '../../routing/chat/ui/layout/attach/AttachEntity';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import { SkeletonShape } from '../../shared/components/skeleton';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { Subtext } from '../../shared/components/subtext';
import { useForm } from './model';
import { Welcome } from './Welcome';
import { MIN_ADDED_AUTHORS } from './constants';
import { translate } from '../../i18n';

const ChoosingAuthorsStyled = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 20px;
    column-gap: 14px;
    position: relative;
`;

const AttachedStyled = styled.div`
    padding: 20px;
    padding-bottom: 80px;
    position: relative;

    h3 {
        font-weight: 300;

        &.error {
            color: ${({ theme }) => theme.scheme.red.action};
        }
    }

    .list-title {
        display: none;
    }

    .check-button {
        background: ${({ theme }) => theme.colors.pageBackground};
        border-radius: 100%;
        height: 32px;
        width: 32px;
        min-height: 32px;

        svg {
            width: 20px;
            height: 20px;
        }

        &:hover {
            background: ${({ theme }) => theme.colors.pageBackground2};
        }
    }

    .checked {
        & .general-cover {
            border: 4px solid ${({ theme }) => theme.colors.pageBackground};
            outline: 4px solid #4e9ee9;
        }
    }

    .entities-list {
        --column-size: 140px;

        display: grid;
        grid-template-columns: repeat(
            auto-fill,
            minmax(var(--column-size), 1fr)
        );
        gap: 20px;
        margin-top: 20px;
        padding: 20px 10px;
        padding-bottom: 30px;

        a {
            --size: var(--column-size);
        }
    }
`;

const SkeletonLoading = () => {
    return (
        <Flex d="column" width="100%" height="100%" gap={20} padding="30px">
            <Flex gap={8} d="column" ai="flex-start" width="100%">
                <SkeletonShape width="50%" height="30px" />
                <SkeletonShape width="20%" height="14px" />
            </Flex>
            <SkeletonShape width="100%" height="40px" />
            <ChoosingAuthorsStyled>
                <UserSkeleton size="140px" orientation="vertical" />
                <UserSkeleton size="140px" orientation="vertical" />
                <UserSkeleton size="140px" orientation="vertical" />
                <UserSkeleton size="140px" orientation="vertical" />
                <UserSkeleton size="140px" orientation="vertical" />
                <UserSkeleton size="140px" orientation="vertical" />
                <UserSkeleton size="140px" orientation="vertical" />
                <UserSkeleton size="140px" orientation="vertical" />
                <UserSkeleton size="140px" orientation="vertical" />
                <UserSkeleton size="140px" orientation="vertical" />
                <UserSkeleton size="140px" orientation="vertical" />
                <UserSkeleton size="140px" orientation="vertical" />
                <UserSkeleton size="140px" orientation="vertical" />
                <UserSkeleton size="140px" orientation="vertical" />
                <UserSkeleton size="140px" orientation="vertical" />
                <UserSkeleton size="140px" orientation="vertical" />
            </ChoosingAuthorsStyled>
        </Flex>
    );
};

export const ChoosingAuthors = () => {
    const [loading, setLoading] = useState(false);
    const handleNext = () => {
        modalModel.events.open({
            title: '',
            content: <Welcome />,
            sizeY: 'm',
        });
    };
    const { values, updateField, onSubmit, errors } = useForm(handleNext, [
        'added',
    ]);

    useEffect(() => {
        setLoading(true);
        Database.Users.getTopAuthors(100, 'numberOfListenersPerMonth')
            .then((users) => {
                updateField({ id: 'authors', value: users });
            })
            .finally(() => {
                setLoading(false);
            });
    }, [updateField]);

    return (
        <AttachedStyled>
            <SkeletonPageAnimation
                skeleton={<SkeletonLoading />}
                loading={loading}
            >
                <Flex jc="space-between" width="100%" padding="0 8px 14px 8px">
                    <Flex width="100%" gap={4} d="column" ai="flex-start">
                        <Flex jc="space-between" width="100%">
                            <h3 className={errors.added ? 'error' : ''}>
                                {translate('choose_at_least_authors_you_like', {
                                    minimum: 5,
                                })}{' '}
                            </h3>
                        </Flex>
                        <Subtext style={{ fontSize: '1rem' }}>
                            {errors.added ?? translate('so_we_know_your_taste')}
                        </Subtext>
                    </Flex>
                    <Button
                        $width="fit-content"
                        style={{ padding: '0 10px' }}
                        className="secondary"
                        onClick={onSubmit}
                    >
                        {translate('skip')}
                    </Button>
                </Flex>
                <AttachEntity
                    library={values.authors}
                    placeholder={translate('search_for_authors')}
                    submitButtonText={'Next'}
                    onEntityClick={(added) => {
                        console.log({ added });

                        updateField({
                            id: 'added',
                            value: (added as TUser[]).map((u) => u.uid),
                        });
                    }}
                    onSubmit={(added) => {
                        console.log({ added });

                        onSubmit();
                    }}
                    submitButtonDisabled={(items) =>
                        items.length < MIN_ADDED_AUTHORS
                    }
                    orientation="vertical"
                    customCheckButton={(checked, user) => {
                        return (
                            <Button className="check-button">
                                {checked ? (
                                    <IconHeartFilled
                                        style={{
                                            color: (user as TUser)
                                                .imageColors[0],
                                        }}
                                    />
                                ) : (
                                    <IconHeart />
                                )}
                            </Button>
                        );
                    }}
                />
            </SkeletonPageAnimation>
        </AttachedStyled>
    );
};
