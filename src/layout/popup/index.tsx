import { useEffect, useRef, useState } from "react";
import { PopupStyled, PopupWrapper } from "./styles";
import { POPUP_WIDTH } from "./constants";

export const Popup = () => {
  const [posX, setPosX] = useState(10);
  const [posY, setPosY] = useState(0);
  const [transformOrigin, setTransformOrigin] = useState("top left");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const onClick = (e: MouseEvent) => {
    setOpen(true);
    let Y, X;

    if (e.clientX + POPUP_WIDTH > window.innerWidth) {
      setPosX(e.clientX - POPUP_WIDTH);
      X = "right";
    } else {
      X = "left";
      setPosX(e.clientX);
    }

    const shiftHeight = ref.current?.clientHeight ?? 300;

    if (e.clientY + shiftHeight > window.innerHeight) {
      Y = "bottom";
      setPosY(e.clientY - shiftHeight);
    } else {
      Y = "top";
      setPosY(e.clientY);
    }

    setTransformOrigin(`${Y} ${X}`);
  };

  useEffect(() => {
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    open && (
      <PopupWrapper onClick={() => setOpen(false)}>
        {open && (
          <PopupStyled
            $transformOrigin={transformOrigin}
            ref={ref}
            $posX={posX}
            $posY={posY}
          >
            Popup
          </PopupStyled>
        )}
      </PopupWrapper>
    )
  );
};
