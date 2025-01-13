import { useRef } from 'react';
import { useClickOutside } from '../../shared/hooks/useClickOutside';
import { popupModel } from './model';
import { PopupStyled } from './styles';

export const Popup = () => {
    const { content, height, width, isOpen, x, y, origin } =
        popupModel.usePopup();
    const ref = useRef<HTMLDivElement>(null);

    useClickOutside(ref, () => {
        if (isOpen) {
            popupModel.events.close();
        }
    });

    return (
        <PopupStyled
            $isOpen={isOpen}
            $transformOrigin={origin}
            ref={ref}
            $posX={x}
            $posY={y}
            $height={height}
            $width={width}
            tabIndex={0}
        >
            {content}
        </PopupStyled>
    );
};
