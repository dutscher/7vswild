import { writable } from 'svelte/store';

const storedActiveSelectionWritable = writable({
    staffelKey: 0,
    episodeID: '',
    reason: 'default',
    site: '',
});
export const storedActiveSelection = {
    subscribe: storedActiveSelectionWritable.subscribe,
    set: storedActiveSelectionWritable.set,
    update: storedActiveSelectionWritable.update,
};
