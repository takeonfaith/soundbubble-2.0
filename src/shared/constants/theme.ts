export const THEME = {
  borderRadius: {
    mild: "6px",
    middle: "10px",
  },
  colors: {
    hover: "#212121",
    pageBackground: "#18191b",
    overlay: "#0e0e0ed4",
    input: "#3a3a3a",
    border: "#92929257",
    sidebar: "#101011",
    blue: "#609dff",
    lightHover: "#ffffff1f",
    modal: "#242629",
  },
} as const;

export type TTheme = typeof THEME;
