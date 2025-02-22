import { IconVolume, IconVolume2, IconVolumeOff } from '@tabler/icons-react';
import { SmallControlButton } from '../../shared/components/musicControls/styles';
import { Slider } from '../../shared/components/slider';
import { SliderWrapper, VolumeButtonStyled } from './styles';
import { songModel } from '../../entities/song/new-model';
import { memo } from 'react';
import { Popup } from '../../layout/newpopup';

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
            <Popup
                position="top"
                closeOnClick={false}
                content={
                    <SliderWrapper>
                        <Slider
                            value={isMuted ? 0 : volume * 100}
                            duration={100}
                            onChangeTime={handleChange}
                            onMouseUp={() => null}
                        />
                    </SliderWrapper>
                }
                triggers={['hover']}
            >
                <SmallControlButton onClick={handleMute}>
                    {volumeIcon}
                </SmallControlButton>
            </Popup>
        </VolumeButtonStyled>
    );
});

VolumeButton.displayName = 'VolumeButton';
