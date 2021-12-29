import { writable } from 'svelte/store';

import dataJSON from '../../data/data.json';

export const storedData = writable([]);

// videos
//  https://www.youtube.com/watch?v=
//  img.youtube.com/vi/[Video-ID]/0.jpg
//  img.youtube.com/vi/[Video-ID]/default.jpg
const youtubeVideoUrl = (ID) => !!ID ? `https://www.youtube.com/watch?v=${ID}` : '';
const youtubeThumbUrl = (ID) => `https://img.youtube.com/vi/${ID}/default.jpg`;
const preparedStore = dataJSON;

Object.entries(preparedStore.status).map(challenger => {
    const tmp = ('' + challenger[1]).split('=');
    const challengePoints = tmp[0].split('|').map((i) => parseInt(i));
    const endResult = challengePoints.reduce((pv, cv) => pv + cv, 0);
    const isOut = challenger[0].includes('*');
    const isWinner = challenger[0].includes('!');
    const tmp2 = ('' + challenger[0]).split('*');
    const exitDay = tmp2.length > 0 ? tmp2[1] : -1;
    preparedStore.status[challenger[0]] = {
        name: challenger[0].replace(/\*|\!|\d/g, ''),
        challengePoints,
        endResult,
        isOut,
        isWinner,
        exitDay,
    }
});

// @ts-ignore
preparedStore.videos = preparedStore.videos.map(video => {
    return {
        title: video.title,
        url: youtubeVideoUrl(video.id),
        thumb: youtubeThumbUrl(video.id),
        date: video.date,
    }
})

Object.keys(preparedStore.reactions).map(challenger => {
    Object.entries(preparedStore.reactions[challenger]).map(episode => {
        if (!!episode[1]) {
            preparedStore.reactions[challenger][episode[0]] = {
                url: youtubeVideoUrl(episode[1]),
                thumb: youtubeThumbUrl(episode[1]),
            }
        }
    })
})

// @ts-ignore
storedData.set(preparedStore);
