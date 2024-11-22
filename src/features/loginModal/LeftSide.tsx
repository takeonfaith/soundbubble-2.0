import {
    IconBrandSafari,
    IconMessageCircle,
    IconMicrophone2,
    IconMusic,
    IconVinyl,
} from '@tabler/icons-react';
import { Logo } from '../../shared/components/logo';
import { Blocks, BlockStyled, PromoStyled } from './styles';
import { Particles } from './Particles';

const Block = ({ icon }: { icon: React.ReactNode }) => {
    return <BlockStyled className="block">{icon}</BlockStyled>;
};

export const LeftSide = () => {
    return (
        <PromoStyled className="promo">
            <Logo short />
            <Blocks>
                <Block icon={<IconMusic />} />
                <Block icon={<IconVinyl />} />
                <Block icon={<IconMicrophone2 />} />
                <Block icon={<IconBrandSafari />} />
                <Block icon={<IconMessageCircle />} />
                <Particles />
            </Blocks>
        </PromoStyled>
    );
};
