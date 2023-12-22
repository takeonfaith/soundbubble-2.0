import { TAuthor } from "@song/model/types";
import { AuthorStyled, AuthorsStyled } from "./styles";

type Props = {
  authors: TAuthor[] | undefined;
  onAuthorClick?: (author: TAuthor) => void;
};

export const Authors = ({ authors, onAuthorClick }: Props) => {
  const handleAuthorClick = (author: TAuthor) => {
    return () => onAuthorClick?.(author);
  };

  return (
    <AuthorsStyled className="authors">
      {authors?.map((author, index) => (
        <AuthorStyled
          onClick={handleAuthorClick(author)}
          to={`/author/${author.uid}`}
          key={author.uid}
        >
          {index !== 0 ? "•" : " "} {author.displayName}
        </AuthorStyled>
      ))}
      {!authors?.length && "-"}
    </AuthorsStyled>
  );
};
