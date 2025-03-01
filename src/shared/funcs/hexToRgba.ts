export function hexToRgbA(hex: string | undefined) {
    let c: string[];
    if (!hex) return undefined;

    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        const rgba = Number('0x' + c.join(''));
        return [(rgba >> 16) & 255, (rgba >> 8) & 255, rgba & 255].join(',');
    }

    return undefined;
}
