import styled from 'styled-components';
import { songModel } from '../../entities/song/new-model';
import { Queue } from '../fullScreenPlayer/Queue';
import { popupModel } from '../popup/model';

const SongsQueueStyled = styled.div`
    padding: 10px;
    overflow-y: auto;
    height: 100%;

    h2 {
        margin: 10px 5px;
    }
`;

export const SongsQueue = () => {
    const { queue } = songModel.useSong();

    return (
        <SongsQueueStyled>
            <h2>Queue</h2>
            <Queue onClick={() => popupModel.events.close()} queue={queue} />
        </SongsQueueStyled>
    );
};
