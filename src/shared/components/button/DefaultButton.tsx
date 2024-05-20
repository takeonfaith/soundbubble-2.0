import { Loading } from "@components/loading";
import { DARK_THEME } from "@shared/constants/theme";
import styled from "styled-components";
import { Button } from ".";

type ButtonAppearance = "primary" | "secondary" | "ghost";

const AnimationWrapper = styled.div`
  transition: 0.3s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 8px;

  &.show {
    opacity: 1;
    visibility: visible;
    transform: scale(1) translate(-50%, -50%);
  }

  &.hide {
    opacity: 0;
    visibility: hidden;
    transform: scale(0.9) translate(-50%, -50%);
  }
`;

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  appearance?: ButtonAppearance;
  width?: string;
};

export const DefaultButton = ({
  loading,
  children,
  appearance = "ghost",
  disabled,
  width,
  ...restProps
}: Props) => {
  const backgrounds: Record<ButtonAppearance, string> = {
    primary: DARK_THEME.colors.blue.action,
    secondary: DARK_THEME.colors.blue.transparent,
    ghost: "transparent",
  };

  return (
    <Button
      disabled={disabled || loading}
      $background={backgrounds[appearance]}
      $width={width}
      {...restProps}
    >
      <AnimationWrapper className={loading ? "show" : "hide"}>
        <Loading />
      </AnimationWrapper>
      <AnimationWrapper className={!loading ? "show" : "hide"}>
        {children}
      </AnimationWrapper>
    </Button>
  );
};
