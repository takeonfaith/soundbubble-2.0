import { createApi, createStore, sample } from 'effector';
import { indicatorModel } from '../../../layout/indicator/model';
import { translate } from '../../../i18n';

type Props = { val: number; indicator?: boolean };

export const $volume = createStore(1);
export const $isMuted = createStore(false);

export const volumeApi = createApi($volume, {
    update: (_, { val }: Props) => val,
    increase: (vol, { val }: Props) =>
        val > 0 ? Math.min(1, vol + val) : Math.max(0, vol + val),
});

export const isMutedApi = createApi($isMuted, {
    toggle: (isMuted) => !isMuted,
});

sample({
    clock: [volumeApi.update, volumeApi.increase],
    source: $volume,
    filter: (_, { indicator }) => !!indicator,
    fn: (val) => ({
        content: translate('volume', { volume: `${(val * 100).toFixed(0)}` }),
    }),
    target: indicatorModel.show,
});
