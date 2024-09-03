import { Settings } from '.';
import { Flex } from '../../../shared/components/flex';
import { TSettingSection } from '../model/types';
import { SectionStyled, SectionTitle } from './styles';

type Props = {
    title: string;
    currentSetting: TSettingSection;
    path: string;
};

export const SettingSection = ({ title, currentSetting, path }: Props) => {
    return (
        <Flex ai="flex-start" d="column" width="100%">
            {title && <SectionTitle>{title.toUpperCase()}</SectionTitle>}
            <SectionStyled>
                <Settings
                    childrenSettings={currentSetting.items}
                    path={`${path}.items`}
                />
            </SectionStyled>
        </Flex>
    );
};
