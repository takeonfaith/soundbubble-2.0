import styled from 'styled-components';
import { songModel } from '../../entities/song/model';
import { Queue } from '../fullScreenPlayer/Queue';

const SongsQueueStyled = styled.div`
    padding: 10px;
    overflow-y: auto;
    height: 100%;

    h2 {
        margin: 10px 5px;
    }
`;

export const SongsQueue = () => {
    const { queue } = songModel.queue.useQueue();
    return (
        <SongsQueueStyled>
            <h2>Queue</h2>
            <Queue queue={queue} />
        </SongsQueueStyled>
    );
};
