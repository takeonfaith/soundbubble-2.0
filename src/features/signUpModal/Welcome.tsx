import styled from 'styled-components';
import { userModel } from '../../entities/user/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { LeftSide } from '../loginModal/LeftSide';
import { useForm } from './model';
import { SignUpModalStyled } from './styles';
import { Subtext } from '../../shared/components/subtext';
import { useUnit } from 'effector-react';
import { signUpFx } from '../../entities/user/model/sign-up';
import { translate } from '../../i18n';

const WelcomeStyled = styled(SignUpModalStyled)`
    h3 {
        font-weight: 400;
    }

    .promo {
        width: 100%;
    }
`;

export const Welcome = () => {
    const [loading] = useUnit([signUpFx.pending]);
    const { onSubmit } = useForm((values) => {
        userModel.events.signUp({
            email: values.email,
            displayName: values.name,
            password: values.password,
            photoFile: values.photo,
            imageColors: values.imageColors,
            addedAuthors: values.added,
        });
    });

    return (
        <WelcomeStyled>
            <Flex width="100%" d="column" gap={20}>
                <LeftSide />
                <Flex d="column" gap={10}>
                    <h3>{translate('welcome')}</h3>
                    <Subtext style={{ fontSize: '1rem' }}>
                        {translate('the_only_thing_left')}
                    </Subtext>
                </Flex>
            </Flex>
            <Flex width="100%">
                <DefaultButton
                    loading={loading}
                    appearance="primary"
                    onClick={onSubmit}
                >
                    {translate('sign_up')}
                </DefaultButton>
            </Flex>
        </WelcomeStyled>
    );
};
