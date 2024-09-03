import styled from 'styled-components';

export const SignUpModalStyled = styled.div`
    padding: 0 25px;
    gap: 0px;
    display: grid;
    grid-template-rows: 1fr 65px;
    height: 100%;
    width: 100%;
`;

export const SignUpWrapper = styled(SignUpModalStyled)`
    padding: 0 25px;

    h2 {
        font-weight: 400;
    }

    .logo {
        z-index: 101;
        margin-top: 10px;
    }

    img.background {
        width: 150%;
        top: -40%;
        left: -50%;
        position: absolute;
        z-index: 100;
        opacity: 0.4;
        pointer-events: none;
    }
`;
