import { styled } from 'styled-components';
import { BeautifulBackground } from '../../../../shared/components/beautifulBackground';

export const PlaylistInvitationStyled = styled(BeautifulBackground)`
    width: 300px;
    padding: 30px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    position: relative;
    border-radius: 6px;
    margin: 2px 0;

    & > * {
        color: #fff;
    }

    .general-cover {
        box-shadow: 0 0 40px #0404049c;
    }

    .playlist-name {
        align-items: center;
    }
`;
