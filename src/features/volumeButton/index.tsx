import { IconVolume } from '@tabler/icons-react';
import { SmallControlButton } from '../../shared/components/musicControls/styles';
import { Slider } from '../../shared/components/slider';
import { VolumeButtonStyled } from './styles';

export const VolumeButton = () => {
    return (
        <VolumeButtonStyled>
            <SmallControlButton>
                <IconVolume opacity={0.9} />
            </SmallControlButton>
            <Slider
                value={100}
                duration={200}
                onChangeTime={() => null}
                onMouseUp={() => null}
                color="#fff"
            />
        </VolumeButtonStyled>
    );
};
