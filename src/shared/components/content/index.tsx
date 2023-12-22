import { useState } from "react";
import { ContentWrapper, ContentStyled, ContentImage } from "./styles";

type Props = {
  image: string;
  children: React.ReactNode;
};

export const Content = ({ image, children }: Props) => {
  const [scroll, setScroll] = useState(0);

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.scrollTop > 200) return;

    setScroll(e.currentTarget.scrollTop);
  };

  return (
    <ContentWrapper onScroll={handleScroll}>
      <ContentImage
        style={{
          transform: `translateY(${scroll / 2}px)`,
          opacity: 1 - scroll / 300,
        }}
        src={image}
      />
      <ContentStyled>{children}</ContentStyled>
    </ContentWrapper>
  );
};
