import { useState } from 'react';
import { CoverStyled } from './styles';

type Props = {
    src: string | undefined;
};

const LOADED_IMAGES: Record<string, boolean> = {};

export const Cover = ({ src }: Props) => {
    const [coverLoaded, setCoverLoaded] = useState(
        LOADED_IMAGES[src ?? ''] ?? false
    );

    const handleOnCoverLoad = () => {
        if (src) {
            setCoverLoaded(true);
            LOADED_IMAGES[src] = true;
        }
    };

    return (
        <CoverStyled
            $coverLoaded={coverLoaded}
            onLoad={handleOnCoverLoad}
            loading="lazy"
            src={src}
        />
    );
};
