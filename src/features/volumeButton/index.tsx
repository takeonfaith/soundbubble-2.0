import { IconVolume, IconVolumeOff } from '@tabler/icons-react';
import { SmallControlButton } from '../../shared/components/musicControls/styles';
import { Slider } from '../../shared/components/slider';
import { VolumeButtonStyled } from './styles';
import { songModel } from '../../entities/song/new-model';

export const VolumeButton = () => {
    const [volume, isMuted] = songModel.useVolume();
    const handleChange = (e: Evt<'input'>) => {
        if (isMuted) {
            songModel.volume.toggle();
        }
        songModel.volume.update(+e.currentTarget.value / 100);
    };

    const handleMute = () => {
        songModel.volume.toggle();
    };

    return (
        <VolumeButtonStyled className='volume-button'>
            <SmallControlButton onClick={handleMute}>
                {isMuted ? <IconVolumeOff /> : <IconVolume opacity={0.9} />}
            </SmallControlButton>
            <Slider
                value={isMuted ? 0 : volume * 100}
                duration={100}
                onChangeTime={handleChange}
                onMouseUp={() => null}
                color="#fff"
            />
        </VolumeButtonStyled>
    );
};
