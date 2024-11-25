export function hexToHsl(hex: string): { h: number; s: number; l: number } {
    // Step 1: Remove the hash (#) if it exists
    hex = hex.replace(/^#/, '');

    // Step 2: Parse the hex string into RGB components
    let r, g, b;

    if (hex.length === 3) {
        // Handle short format (e.g., #FFF)
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
        // Handle full format (e.g., #FFFFFF)
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
    } else {
        throw new Error('Invalid HEX color.');
    }

    // Step 3: Convert RGB to the range [0, 1]
    r /= 255;
    g /= 255;
    b /= 255;

    // Step 4: Find the minimum and maximum values among RGB
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    // Step 5: Calculate Lightness
    let l = (max + min) / 2;

    // Step 6: Calculate Saturation
    let s = 0;
    if (max !== min) {
        s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
    }

    // Step 7: Calculate Hue
    let h = 0;
    if (max === r) {
        h = (g - b) / (max - min);
    } else if (max === g) {
        h = 2 + (b - r) / (max - min);
    } else if (max === b) {
        h = 4 + (r - g) / (max - min);
    }

    h = Math.round(h * 60); // Convert hue to degrees
    if (h < 0) h += 360; // Ensure hue is non-negative

    // Convert Saturation and Lightness to percentages
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return { h, s, l };
}
