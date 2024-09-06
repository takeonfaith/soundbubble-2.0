export const getSongDuration = (songSrc: string) => {
    return new Promise<number>((resolve, reject) => {
        const audio = new Audio(songSrc);

        // Event listener for when metadata has loaded
        audio.addEventListener('loadedmetadata', () => {
            const duration = audio.duration;
            resolve(duration); // Resolve the promise with the duration
        });

        // Error event listener
        audio.addEventListener('error', (e) => {
            reject(`Error occurred while loading audio: ${e.message}`);
        });

        // Initiate the loading of the audio file by setting its src
        audio.src = songSrc;
    });
};
