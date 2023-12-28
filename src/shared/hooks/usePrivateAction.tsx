import { TEMP_USER } from "@shared/constants";
import { LoginModal } from "features/loginModal";
import { modalModel } from "layout/modal/model";

export const usePrivateAction = () => {
  const user = TEMP_USER;

  const loggedIn = <T,>(fn: () => T) => {
    if (user === null) {
      return () => {
        modalModel.events.open({
          title: "Войдите в аккаунт",
          content: <LoginModal actionAfterLogin={fn} />,
        });
      };
    }

    return fn;
  };

  return { loggedIn };
};
