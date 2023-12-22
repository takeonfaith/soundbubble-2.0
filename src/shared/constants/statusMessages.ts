const errorString = (str: string) => {
  return (error: string) => `${str}. Причина: ${error}`;
};

export const ERRORS = {
  operationFailed: errorString("Не удалось выполнить операцию"),
  loginFailed: errorString("Не удалось войти в аккаунт"),
} as const;
