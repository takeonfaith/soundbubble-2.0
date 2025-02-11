import { IconVolume, IconVolume2, IconVolumeOff } from '@tabler/icons-react';
import { SmallControlButton } from '../../shared/components/musicControls/styles';
import { Slider } from '../../shared/components/slider';
import { VolumeButtonStyled } from './styles';
import { songModel } from '../../entities/song/new-model';
import { memo } from 'react';

export const VolumeButton = memo(() => {
    const [volume, isMuted] = songModel.useVolume();

    const volumeIcon =
        volume > 0.5 && !isMuted ? (
            <IconVolume />
        ) : volume === 0 || isMuted ? (
            <IconVolumeOff />
        ) : (
            <IconVolume2 />
        );

    const handleChange = (time: number) => {
        if (isMuted) {
            songModel.volume.toggle();
        }
        songModel.volume.update({ val: time / 100 });
    };

    const handleMute = () => {
        songModel.volume.toggle();
    };

    return (
        <VolumeButtonStyled className="volume-button">
            <SmallControlButton onClick={handleMute}>
                {volumeIcon}
            </SmallControlButton>
            <Slider
                value={isMuted ? 0 : volume * 100}
                duration={100}
                onChangeTime={handleChange}
                onMouseUp={() => null}
            />
        </VolumeButtonStyled>
    );
});

VolumeButton.displayName = 'VolumeButton';
