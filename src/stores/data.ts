import { writable } from 'svelte/store';

import dataJSON from '../../data/data.json';

export const storedData = writable([]);
// @ts-ignore
storedData.set(dataJSON);
