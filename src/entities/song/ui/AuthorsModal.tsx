import { modalModel } from '../../../layout/modal/model';
import { Flex } from '../../../shared/components/flex';
import { createUserObject } from '../../user/lib/createUserObject';
import { UserItem } from '../../user/ui';
import { TAuthor } from '../model/types';

type Props = {
    authors: TAuthor[] | undefined;
    isAuthor: boolean;
};

export const AuthorsModal = ({ authors, isAuthor }: Props) => {
    if (!authors) return null;

    return (
        <Flex
            d="column"
            gap={10}
            width="100%"
            height="calc(100% - 68px)"
            padding="20px"
        >
            {authors.map((author) => {
                const user = createUserObject({
                    uid: author.uid,
                    displayName: author.displayName,
                    photoURL: author.photoURL,
                    isAuthor,
                    isVerified: false,
                });

                return (
                    <UserItem
                        key={author.uid}
                        user={user}
                        onClick={() => modalModel.events.close()}
                        orientation="horizontal"
                    />
                );
            })}
        </Flex>
    );
};
