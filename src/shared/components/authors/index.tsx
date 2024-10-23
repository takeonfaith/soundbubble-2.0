import { TAuthor } from '@song/model/types';
import { useNavigate } from 'react-router';
import { getAuthorsToString } from '../../../entities/song/lib/getAuthorsToString';
import { AuthorsModal } from '../../../entities/song/ui/AuthorsModal';
import { modalModel } from '../../../layout/modal/model';
import { AuthorsStyled } from './styles';

type Props = {
    authors: TAuthor[] | undefined;
    onAuthorsClick?: () => void;
    width?: string;
    disableOnDesktop?: boolean;
    disableOnMobile?: boolean;
    authorsQuantity?: number;
    isAuthor?: boolean;
};

export const Authors = ({
    authors,
    onAuthorsClick,
    width,
    isAuthor = true,
    disableOnDesktop = false,
    disableOnMobile = true,
}: Props) => {
    const navigate = useNavigate();

    const handleOpenAuthors = (e: Evt<'div'>) => {
        e.stopPropagation();
        onAuthorsClick?.();

        if ((authors?.length ?? 0) > 1) {
            modalModel.events.open({
                title: `Authors`,
                content: <AuthorsModal isAuthor={isAuthor} authors={authors} />,
            });
        } else {
            navigate(`/${isAuthor ? 'author' : 'user'}/${authors?.[0].uid}`);
        }
    };

    return (
        <AuthorsStyled
            className="authors"
            $width={width}
            $disableOnDesktop={disableOnDesktop}
            $disableOnMobile={disableOnMobile}
            onClick={handleOpenAuthors}
        >
            {authors && getAuthorsToString(authors).trim()}
            {!authors?.length && '-'}
        </AuthorsStyled>
    );
};
