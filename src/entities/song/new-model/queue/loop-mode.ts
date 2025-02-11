import { createStore, createApi } from 'effector';
import { LoopMode } from '../../model/types';

export const $loopMode = createStore<LoopMode>(
    +(localStorage.getItem('loopMode') ?? 0) as LoopMode
);

export const { toggleLoopMode } = createApi($loopMode, {
    toggleLoopMode: (loopMode) => {
        let mode: number;
        if (loopMode === LoopMode.noloop) mode = LoopMode.loopall;
        else if (loopMode === LoopMode.loopall) mode = LoopMode.loopone;
        else mode = LoopMode.noloop;

        localStorage.setItem('loopMode', mode.toString());
        return mode;
    },
});
