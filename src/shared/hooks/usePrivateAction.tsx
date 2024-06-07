
import { LoginModal } from "features/loginModal";
import { modalModel } from "layout/modal/model";
import { userModel } from "../../entities/user/model";

export const usePrivateAction = () => {
  const [{ data }] = userModel.useUser();

  const openLoginModal = <T = void>(fn?: () => T) => () => {
    modalModel.events.open({
      title: "Войдите в аккаунт",
      content: <LoginModal actionAfterLogin={fn} />,
    });
  };

  const loggedIn = <T,>(fn: () => T) => {
    if (data === null) {
      return openLoginModal(fn)
    }

    return fn;
  };

  return { loggedIn, openLoginModal };
};
