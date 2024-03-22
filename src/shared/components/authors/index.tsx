import { TAuthor } from "@song/model/types";
import { AuthorStyled, AuthorsStyled } from "./styles";

type Props = {
  authors: TAuthor[] | undefined;
  onAuthorClick?: (author: TAuthor) => void;
  width?: string
};

export const Authors = ({ authors, onAuthorClick, width }: Props) => {
  const handleAuthorClick = (author: TAuthor) => {
    return (e: any) => {
      e.stopPropagation()
      onAuthorClick?.(author);
    }
  };

  return (
    <AuthorsStyled className="authors" $width={width}>
      {authors?.map((author, index) => (
        <>
          {index !== 0 ? "•" : " "}
          <AuthorStyled
            onClick={handleAuthorClick(author)}
            to={`/author/${author.uid}`}
            key={author.uid}
          >
            {author.displayName}
          </AuthorStyled>
        </>
      ))}
      {!authors?.length && "-"}
    </AuthorsStyled>
  );
};
