import { useState } from 'react';
import { CoverStyled } from './styles';

type Props = {
    src: string | undefined;
};

export const Cover = ({ src }: Props) => {
    const [coverLoaded, setCoverLoaded] = useState(false);

    const handleOnCoverLoad = () => {
        if (src) {
            setCoverLoaded(true);
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
