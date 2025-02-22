import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { TUser } from '../../../../entities/user/model/types';
import { UserCover } from '../../../../entities/user/ui/UserCover';
import { Button } from '../../../../shared/components/button';
import { Flex } from '../../../../shared/components/flex';
import { AuthorPageHeaderStyled } from './styles';

type Props = {
    author: TUser | null;
    children?: React.ReactNode;
    title: string;
};

export const AuthorPageHeader = ({ author, children, title }: Props) => {
    const navigate = useNavigate();

    return (
        <AuthorPageHeaderStyled>
            <Flex gap={14}>
                <Button
                    $height="40px"
                    $width="40px"
                    style={{ borderRadius: '100%' }}
                    onClick={() => navigate(`/author/${author?.uid}`)}
                >
                    <IconArrowLeft size={20} />
                </Button>
                <Flex gap={10}>
                    <UserCover
                        isAuthor
                        size="30px"
                        src={author?.photoURL}
                        colors={author?.imageColors}
                    />
                    <h2>
                        {author?.displayName} {title}
                    </h2>
                </Flex>
            </Flex>
            {children}
        </AuthorPageHeaderStyled>
    );
};
