import { createEvent, createStore, sample } from 'effector';

export const setAnalyzerAndAudioData = createEvent<{
    analyser: AnalyserNode;
    audioData: Uint8Array;
}>();

export const $analyser = createStore<AnalyserNode | null>(null);
export const $audioData = createStore<Uint8Array | null>(null);

sample({
    clock: setAnalyzerAndAudioData,
    fn: ({ analyser }) => {
        return analyser;
    },
    target: $analyser,
});

sample({
    clock: setAnalyzerAndAudioData,
    fn: ({ audioData }) => {
        return audioData;
    },
    target: $audioData,
});
