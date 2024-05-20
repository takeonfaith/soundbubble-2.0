export const DARK_THEME = {
    borderRadius: {
        mild: '6px',
        middle: '10px',
        big: '14px',
        huge: '5%',
    },
    colors: {
        brightness: 1.1,
        pageTopButton: '#171717',
        skeleton: '#ffffff1f',
        playerDarkening: '#000000cb',
        textColor: '#fff',
        textColorOppiste: '#000',
        hover: '#ffffff14',
        pageBackground: '#101010',
        overlay: '#0e0e0ed4',
        input: '#323232',
        border: '#92929257',
        sidebar: '#161616',
        lightHover: '#ffffff1f',
        darkHover: '#0000002b',
        modal: '#242629',
        greyText: '#a2a2a2',
        blue: {
            main: '#75a8fa',
            action: '#3481fe',
            transparent: '#5394ff4f',
        },
        red: {
            text: '#ffb3b3',
            transparent: '#ff63632e',
            main: '#ff6f6f',
        },
    },
};

export type TTheme = typeof DARK_THEME;

export const LIGHT_THEME: TTheme = {
    borderRadius: {
        mild: '6px',
        middle: '10px',
        big: '14px',
        huge: '5%',
    },
    colors: {
        brightness: 0.7,
        pageTopButton: '#f1f1f1',
        skeleton: '#0000001a',
        playerDarkening: '#f1f1f1c9',
        textColor: '#000',
        textColorOppiste: '#fff',
        hover: '#73737314',
        pageBackground: '#fff',
        overlay: '#0e0e0ed4',
        input: '#f0f0f0',
        border: '#b6b6b657',
        sidebar: '#f1f1f1',
        lightHover: '#ffffff80',
        darkHover: '#0000002b',
        modal: '#fff',
        greyText: '#a2a2a2',
        blue: {
            main: '#5275b5',
            action: '#3481fe',
            transparent: '#5394ff4f',
        },
        red: {
            text: '#e15353',
            transparent: '#ff63632e',
            main: '#ff6f6f',
        },
    },
};
