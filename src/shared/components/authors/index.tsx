import { TAuthor } from '@song/model/types';
import React from 'react';
import { AuthorsStyled, AuthorStyled } from './styles';

type Props = {
    authors: TAuthor[] | undefined;
    width?: string;
    disableOnDesktop?: boolean;
    disableOnMobile?: boolean;
    authorsQuantity?: number;
    isAuthor?: boolean;
    onAuthorsClick?: () => void;
    renderAuthor?: (author: TAuthor) => React.ReactNode;
};

export const Authors = ({
    authors,
    onAuthorsClick,
    width,
    isAuthor = true,
    disableOnDesktop = false,
    disableOnMobile = true,
}: Props) => {
    // const navigate = useNavigate();

    // const handleOpenAuthors = (e: Evt<'div'>) => {
    //     e.stopPropagation();
    //     onAuthorsClick?.();

    //     if ((authors?.length ?? 0) > 1) {
    //         modalModel.events.open({
    //             title: `Authors`,
    //             content: <AuthorsModal isAuthor={isAuthor} authors={authors} />,
    //         });
    //     } else {
    //         navigate(`/${isAuthor ? 'author' : 'user'}/${authors?.[0].uid}`);
    //     }
    // };

    return (
        <AuthorsStyled
            className="authors"
            $width={width}
            $disableOnDesktop={disableOnDesktop}
            $disableOnMobile={disableOnMobile}
        >
            {authors?.map((author, index) => {
                return (
                    <>
                        {index !== 0 && ' & '}
                        <AuthorStyled
                            key={author.uid}
                            to={`/${isAuthor ? 'author' : 'user'}/${
                                author.uid
                            }`}
                            onClick={(e) => {
                                e.stopPropagation();
                                onAuthorsClick?.();
                            }}
                        >
                            {author.displayName}
                        </AuthorStyled>
                    </>
                );
            })}
            {!authors?.length && '-'}
        </AuthorsStyled>
    );
};
