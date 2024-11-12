import { IconChartBarOff } from '@tabler/icons-react';
import { UserItem } from '../../../entities/user/ui';
import { Flex } from '../../../shared/components/flex';
import { PageMessage } from '../../../shared/components/pageMessage';
import { ContentWrapper } from '../../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../../shared/components/skeleton/SkeletonPageAnimation';
import { trendsModel } from '../model';
import { Skeleton } from './Skeleton';
import { TopPlates } from './styles';
import { TopPlate } from './TopPlate';

export const TrendsPageAuthors = () => {
    const [authors, loading] = trendsModel.useAuthors();

    return (
        <ContentWrapper>
            <SkeletonPageAnimation loading={loading} skeleton={<Skeleton />}>
                {!!authors.length && (
                    <TopPlates>
                        <TopPlate index={1} entity={authors[0]} />
                        <TopPlate index={2} entity={authors[1]} />
                        <TopPlate index={3} entity={authors[2]} />
                    </TopPlates>
                )}
                {authors.slice(3).map((author) => {
                    return (
                        <UserItem
                            user={author}
                            orientation="horizontal"
                            key={author.uid}
                        />
                    );
                })}
                {!authors.length && (
                    <Flex
                        height="100%"
                        width="100%"
                        jc="center"
                        padding="20vh 0"
                    >
                        <PageMessage
                            icon={IconChartBarOff}
                            title={'Failed to load trends'}
                            description={
                                'This means something went really wrong...'
                            }
                        />
                    </Flex>
                )}
            </SkeletonPageAnimation>
        </ContentWrapper>
    );
};
