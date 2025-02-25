export const MOBILE_SCREEN = '(max-width: 766px)';
export const NOT_MOBILE_SCREEN = '(min-width: 767px)';
export const NOT_TABLET_SCREEN = '(min-width: 901px)';
export const TABLET_SCREEN = '(max-width: 900px)';
export const SMALL_DESKTOP = '(max-width: 1380px)';
export const MIDDLE_DESKTOP = '(min-width: 1381px)';

export const MEDIA_QUERIES = {
    isMobile: `@media ${MOBILE_SCREEN}`,
    isNotMobile: `@media ${NOT_MOBILE_SCREEN}`,
    isTablet: `@media ${TABLET_SCREEN}`,
    isSmallTesktop: `@media ${SMALL_DESKTOP}`,
    isMiddleTesktop: `@media ${MIDDLE_DESKTOP}`,
    isNotTablet: `@media ${NOT_TABLET_SCREEN}`,
} as const;

export const JS_QUERIES = [
    { query: MOBILE_SCREEN, title: 'isMobile', value: 'mobile' },
    { query: TABLET_SCREEN, title: 'isTablet', value: 'tablet' },
    { query: SMALL_DESKTOP, title: 'isSmallDesktop', value: 'smallDesktop' },
    { query: MIDDLE_DESKTOP, title: 'isMiddleDesktop', value: 'middleDesktop' },
] as const;
