import { useUnit } from 'effector-react';
import { useRef } from 'react';
import { useTheme } from 'styled-components';
import { TSong } from '../../../entities/song/model/types';
import { TUser } from '../../../entities/user/model/types';
import { UserItem } from '../../../entities/user/ui';
import { translate } from '../../../i18n';
import { HorizontalList } from '../../../shared/components/horizontalList';
import { NavigationTitle } from '../../../shared/components/navigationTitle';
import { $similarAuthors } from '../model';
import { MAX_SIMILAR_AUTHORS } from './constants';
import { SimilarAuthorsStyled } from './styles';

type Props = {
    songs: TSong[];
    currentPageUser: TUser | null;
};

export const SimilarAuthors = ({ currentPageUser }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const theme = useTheme();
    const [similarAuthors] = useUnit([$similarAuthors]);

    if (similarAuthors.length === 1) return null;

    return (
        <SimilarAuthorsStyled ref={ref}>
            <div className="title">
                <NavigationTitle
                    showNavigation={similarAuthors.length > MAX_SIMILAR_AUTHORS}
                    to={`/author/${currentPageUser?.uid}/similar-authors`}
                >
                    <h3>{translate('similar_authors')}</h3>
                </NavigationTitle>
            </div>
            <HorizontalList overflowColor={theme.colors.pageBackground4}>
                {similarAuthors.slice(0, MAX_SIMILAR_AUTHORS).map((author) => {
                    if (author.uid === currentPageUser?.uid) return null;

                    return <UserItem user={author} key={author.uid} />;
                })}
            </HorizontalList>
        </SimilarAuthorsStyled>
    );
};
