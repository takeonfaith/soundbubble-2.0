import { TAuthor } from '@song/model/types';
import { AuthorStyled, AuthorsStyled } from './styles';

type Props = {
    authors: TAuthor[] | undefined;
    onAuthorClick?: (author: TAuthor) => void;
    width?: string;
    disableOnDesktop?: boolean;
    disableOnMobile?: boolean;
    authorsQuantity?: number;
    isUser?: boolean;
};

export const Authors = ({
    authors,
    onAuthorClick,
    width,
    isUser = false,
    authorsQuantity = 4,
    disableOnDesktop = false,
    disableOnMobile = true,
}: Props) => {
    const handleAuthorClick = (author: TAuthor) => {
        return (e: Evt<'a'>) => {
            e.stopPropagation();
            onAuthorClick?.(author);
        };
    };

    return (
        <AuthorsStyled
            className="authors"
            $width={width}
            $disableOnDesktop={disableOnDesktop}
            $disableOnMobile={disableOnMobile}
        >
            {authors?.slice(0, authorsQuantity)?.map((author, index) => {
                const to = isUser
                    ? `/user/${author.uid}`
                    : `/author/${author.uid}`;
                return (
                    <>
                        {index !== 0 ? '&' : ' '}
                        <AuthorStyled
                            onClick={handleAuthorClick(author)}
                            to={to}
                            key={author.uid + index}
                        >
                            {author.displayName}
                        </AuthorStyled>
                    </>
                );
            })}
            {(authors?.length ?? 0) > authorsQuantity && '...'}
            {!authors?.length && '-'}
        </AuthorsStyled>
    );
};
