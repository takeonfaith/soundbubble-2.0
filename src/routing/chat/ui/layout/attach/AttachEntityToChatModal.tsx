import styled from 'styled-components';
import { userModel } from '../../../../../entities/user/model';
import { AttachEntity } from './AttachEntity';
import { Tabs } from '../../../../../shared/components/tabs';
import { Flex } from '../../../../../shared/components/flex';

const AttachEntityToChatModalStyled = styled.div`
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .list-title {
        font-weight: 300;
        width: 100%;
        padding: 6px;
        margin-top: 10px;
    }
`;

export const AttachEntityToChatModal = () => {
    const [library] = userModel.useSongLibrary();

    return (
        <AttachEntityToChatModalStyled>
            <Tabs
                tabs={[
                    { title: 'Songs', url: '' },
                    { title: 'Albums', url: '' },
                    { title: 'Authors', url: '' },
                ]}
            />
            <Flex width="100%" d="column">
                <AttachEntity library={library} submitButtonText="Send" />
            </Flex>
        </AttachEntityToChatModalStyled>
    );
};
