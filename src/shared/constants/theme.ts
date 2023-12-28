export const THEME = {
  borderRadius: {
    mild: "6px",
    middle: "10px",
  },
  colors: {
    hover: "#212121",
    pageBackground: "#18191b",
    overlay: "#0e0e0ed4",
    input: "#2b2b2b",
    border: "#92929257",
    sidebar: "#101011",
    lightHover: "#ffffff1f",
    modal: "#242629",
    greyText: "#a2a2a2",
    blue: {
      main: "#75a8fa",
    },
    red: {
      transparent: "#ff63632e",
      main: "#ff6f6f",
    },
  },
} as const;

export type TTheme = typeof THEME;
