export enum Browsers {
    Chrome = 'Chrome',
    Firefox = 'Firefox',
    Safari = 'Safari',
    Edge = 'Edge',
    Opera = 'Opera',
    InternetExplorer = 'Internet Explorer',
    Unknown = 'Unknown',
}

export function getBrowserName(): Browsers {
    const userAgent = navigator.userAgent;

    if (/firefox/i.test(userAgent)) {
        return Browsers.Firefox;
    } else if (
        /chrome|chromium|crios/i.test(userAgent) &&
        !/edg/i.test(userAgent)
    ) {
        return Browsers.Chrome;
    } else if (
        /safari/i.test(userAgent) &&
        !/chrome|chromium|crios/i.test(userAgent)
    ) {
        return Browsers.Safari;
    } else if (/edg/i.test(userAgent)) {
        return Browsers.Edge;
    } else if (/opr|opera/i.test(userAgent)) {
        return Browsers.Opera;
    } else if (/msie|trident/i.test(userAgent)) {
        return Browsers.InternetExplorer;
    } else {
        return Browsers.Unknown;
    }
}
