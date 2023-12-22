import styled from "styled-components";

export const MusicControlsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  color: #fff;
`;

export const CustomSlider = styled.input<{ color1: string | undefined }>`
  -webkit-appearance: none;
  appearance: none;
  height: 3px;
  width: 100%;
  border-radius: 10px;
  background: #ffffffbd;
  background-image: linear-gradient(
    90deg,
    ${({ color1 }) => color1 ?? "grey"} 100%,
    white 50%
  );
  background-repeat: no-repeat;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    background: ${({ color1 }) => color1 ?? "grey"};
    transition: 0.2s;

    &:hover {
      box-shadow: 0 0 0px 10px ${({ theme }) => theme.colors.lightHover};
    }
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;

export const ControlButton = styled.button`
  border: none;
  background: transparent;
  width: 60px;
  height: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.lightHover};

    svg {
      filter: drop-shadow(0 0 10px ${({ theme }) => theme.colors.lightHover});
    }
  }
`;

export const DurationText = styled.div`
  font-size: 0.8rem;
`;
