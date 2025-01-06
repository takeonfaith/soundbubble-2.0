import { useState } from 'react';
import { Server } from '../../server';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { LoadingWrapper } from '../../shared/components/loadingWrapper';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { SongInput } from '../../shared/components/songInput';

export const TestPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const send = async () => {
        setLoading(false);
        if (file) {
            setLoading(true);
            await Server.uploadAudio(
                file,
                '12321231231',
                'Sushi',
                'ryan james'
            );
            setLoading(false);
        }
    };

    return (
        <PageWrapper>
            <Flex jc="center" width="100%" height="100%">
                {loading && <LoadingWrapper />}
                <Flex gap={10} d="column" width="500px">
                    <SongInput onChange={(file) => setFile(file)} file={file} />
                    <DefaultButton appearance="primary" onClick={send}>
                        Send
                    </DefaultButton>
                </Flex>
            </Flex>
        </PageWrapper>
    );
};
