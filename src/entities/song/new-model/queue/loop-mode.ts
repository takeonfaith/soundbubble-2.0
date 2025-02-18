import { createStore, createApi } from 'effector';
import { LoopMode } from '../../model/types';

export const $loopMode = createStore<LoopMode>(
    +(localStorage.getItem('loopMode') ?? 0) as LoopMode
);

export const { toggleLoopMode } = createApi($loopMode, {
    toggleLoopMode: (loopMode) => {
        const modes = [LoopMode.noloop, LoopMode.loopall, LoopMode.loopone];
        const mode = modes[(loopMode + 1) % modes.length] ?? LoopMode.noloop;

        localStorage.setItem('loopMode', mode.toString());
        return mode;
    },
});
