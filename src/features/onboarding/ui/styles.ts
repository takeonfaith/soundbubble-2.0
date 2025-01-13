import styled from 'styled-components';

export const FirstScreenStyled = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 100%;
    padding: 20px;

    &:after {
        content: '';
        display: block;
        width: 700px;
        height: 400px;
        background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 70%,
            rgba(255, 255, 255, 1) 100%
        );
        border-radius: 0;
        position: absolute;
        top: 0;
        left: 0;
    }

    img.background {
        position: absolute;
        filter: hue-rotate(100deg);
    }

	 h2 {
		z-index: 10;
	 }

    span {
        font-size: 1.1rem;
        width: 300px;
        text-align: center;
		  z-index: 10;
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    width: 620px;

    animation: slide 20s infinite linear;

    &.shifted {
        margin-right: 80px;
        animation-duration: 15s;
    }

    @keyframes slide {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-640px);
        }
    }

    & div {
        min-width: 70px;
        height: 70px;
        border-radius: 10px;
        background: ${({ theme }) => theme.colors.pageTopButton};
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.5;
        transition: 0.5s;

        &.current {
            opacity: 1;
            color: ${({ theme }) => theme.scheme.blue.action};
        }

        svg {
            width: 40%;
            height: 40%;
        }
    }
`;
