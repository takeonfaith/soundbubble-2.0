import { styled } from 'styled-components';
import { BeautifulBackground } from '../beautifulBackground';

export const CenterButton = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: ${({ theme }) => theme.scheme.blue.action};
    color: #fff;
    box-shadow: 0 4px 50px ${({ theme }) => theme.scheme.blue.action};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    transition: 0.2s opacity;

    &.with-preview {
        opacity: 0;
    }

    svg {
        width: 30px;
        height: 30px;
    }
`;

export const InputWrapper = styled.div`
    width: 100%;
    min-height: 260px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
    border: 3px dashed ${({ theme }) => theme.colors.border};

    &.error {
        border: 3px dashed ${({ theme }) => theme.scheme.red.action};
    }

    &:hover {
        ${CenterButton} {
            &.with-preview {
                opacity: 1;
            }
        }
    }
`;

export const PhotoInputStyled = styled.label`
    width: 220px;
    height: 220px;
    border-radius: ${({ theme }) => theme.borderRadius.middle};
    background: ${({ theme }) => theme.colors.input};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s background;
    overflow: hidden;

    input[type='file'] {
        display: none;
    }

    img.preview-image {
        width: 85%;
        height: 85%;
        object-fit: cover;
        z-index: 10;
        border-radius: 10px;
        opacity: 0;
        animation: generalAppear 0.5s forwards;
        animation-delay: 0.2s;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.hover};
    }
`;

export const BackgroundPreview = styled(BeautifulBackground)`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0;
    animation: generalAppear 0.5s forwards;
    animation-delay: 0.2s;
`;

export const ColorInput = styled.input`
    -webkit-appearance: none;
    width: calc(100% + 20px);
    height: 70px;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.colors.pageBackground};

    &::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    &::-webkit-color-swatch {
        border: none;
    }
`;
