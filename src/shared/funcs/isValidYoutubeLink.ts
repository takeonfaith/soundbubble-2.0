export const isValidYoutubeLink = (url: string) => {
    const youtubeRegExp = new RegExp(
        /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-_]*)(&(amp;)?[\w?=]*)?/
    );

    return youtubeRegExp.test(url);
};
