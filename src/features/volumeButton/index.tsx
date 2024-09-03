import { IconVolume } from '@tabler/icons-react';
import { SmallControlButton } from '../../shared/components/musicControls/styles';
import { VolumeButtonStyled } from './styles';
import { Slider } from '../../shared/components/slider';
import { ChangeEvent, MouseEvent } from 'react';

export const VolumeButton = () => {
    return (
        <VolumeButtonStyled>
            <SmallControlButton>
                <IconVolume opacity={0.9} />
            </SmallControlButton>
            <Slider
                value={100}
                duration={200}
                onChangeTime={function (
                    event: ChangeEvent<HTMLInputElement>
                ): void {
                    throw new Error('Function not implemented.');
                }}
                onMouseUp={function (
                    event: MouseEvent<HTMLInputElement, MouseEvent>
                ): void {
                    throw new Error('Function not implemented.');
                }}
					 color='#fff'
            />
        </VolumeButtonStyled>
    );
};
