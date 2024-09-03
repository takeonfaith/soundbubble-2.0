import styled from 'styled-components';
import { userModel } from '../../../entities/user/model';
import { UserItem } from '../../../entities/user/ui';
import { Header } from '../../../layout/header';
import { PageWrapper } from '../../../shared/components/pageWrapper';

const SimilarAuthorsPageStyled = styled.div`
    max-width: 650px;
    width: 100%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 30px;

    @media (max-width: 768px) {
        padding: 20px;
        gap: 8px;
    }
`;

export const SimilarAuthorsPage = () => {
    const [{ similarAuthors }] = userModel.useUserPage();

    return (
        <PageWrapper>
            <Header />
            <SimilarAuthorsPageStyled>
                {similarAuthors.map((author) => {
                    return (
                        <UserItem
                            user={author}
                            key={author.uid}
                            orientation="horizontal"
                        />
                    );
                })}
            </SimilarAuthorsPageStyled>
        </PageWrapper>
    );
};
