import {
    IconBrandSafari,
    IconMessageCircle,
    IconMicrophone2,
    IconMusic,
    IconVinyl,
} from '@tabler/icons-react';
import { Logo } from '../../shared/components/logo';
import { Blocks, BlockStyled, PARTICLES_QUANTITY, PromoStyled } from './styles';

const Block = ({ icon }: { icon: React.ReactNode }) => {
    return <BlockStyled className="block">{icon}</BlockStyled>;
};

export const LeftSide = () => {
    return (
        <PromoStyled>
            <Logo short />
            <Blocks>
                <Block icon={<IconMusic />} />
                <Block icon={<IconVinyl />} />
                <Block icon={<IconMicrophone2 />} />
                <Block icon={<IconBrandSafari />} />
                <Block icon={<IconMessageCircle />} />

                <div className="particles">
                    {Array.from(Array(PARTICLES_QUANTITY)).map((_, index) => {
                        return <div className="particle" key={index} />;
                    })}
                </div>
            </Blocks>
        </PromoStyled>
    );
};
