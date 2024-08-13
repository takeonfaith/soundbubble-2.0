declare module 'react-color-extractor' {
    export type ColorExtractorProps = {
        children?: React.ReactNode;
        src?: string;
        /**
         * @param maxColors prop accepts a number for amount of colors in palette from which swatches will be generated.
         */
        maxColors?: number;
        /**
         * When set to true, produces the color in rgb format. By default, colors produced are in hex format
         */
        rbg?: boolean;
        /**
         * @param getColors callback is invoked with an array of colors, either in hex or rgb format once the image is done processing. Use this callback to update the state with the colors array
         */
        getColors?: (colors: string[]) => void;
        onError?: (err: Error) => void;
    };

    export function ColorExtractor(props: ColorExtractorProps): JSX.Element;
}
