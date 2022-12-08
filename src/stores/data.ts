import { writable } from 'svelte/store';
import { getSecondsFromStrDuration, toHHMMSS } from '../utils';

import JSON1 from '../../data/staffel-1.json';
import JSON2 from '../../data/staffel-2.json';

export const storedData = writable([]);

// videos
//  https://www.youtube.com/watch?v=
//  img.youtube.com/vi/[Video-ID]/0.jpg
//  img.youtube.com/vi/[Video-ID]/default.jpg
const youtubeVideoUrl = (ID) => !!ID ? `https://www.youtube.com/watch?v=${ID}` : '';
const youtubeThumbUrl = (ID) => `https://img.youtube.com/vi/${ID}/0.jpg`;
const defaultStore = {
    duration: 0,
    durationBehind: 0,
    durationReactions: 0,
    status: {},
    reactions: [],
    videos: [],
    challenges: []
};
const preparedStores = [defaultStore, {...defaultStore, ...JSON1}, {...defaultStore, ...JSON2}];

preparedStores.map((store, storeIndex) => {
    if (store.status === 0) {
        return store;
    }

    Object.entries(store.status).map(([challengerDataNameDays, challengerDataPoints]) => {
        const challengerPoints = challengerDataPoints.split('|').map((i) => parseInt(i));
        const endResult = challengerPoints.reduce((pv, cv) => pv + cv, 0);
        const isOut = challengerDataNameDays.includes('*');
        const isWinner = challengerDataNameDays.includes('!');
        let [challengerName, exitDay] = challengerDataNameDays.split('*');
        challengerName = challengerName.replace('!', '');
        store.status[challengerDataNameDays] = {
            name: challengerName,
            challengerPoints,
            endResult,
            isOut,
            isWinner,
            exitDay: !!exitDay ? exitDay : -1,
        }
    });

    const videosLength = store.videos.length;

    store.videos = store.videos.map((video, index) => {
        let reactions = 0;
        let durationReactions = 0;

        Object.keys(store.reactions).map(challenger => {
            if (video.short in store.reactions[challenger]) {
                const [youtubeID, duration] = store.reactions[challenger][video.short].split('|');
                durationReactions += getSecondsFromStrDuration(duration);
                reactions++;
            }
        });

        const [youtubeID, duration] = video.id.split('|');

        if (!video.short.includes('bh')) {
            store.duration += getSecondsFromStrDuration(duration);
        } else {
            store.durationBehind += getSecondsFromStrDuration(duration);
        }
        store.durationReactions += durationReactions;

        return {
            id: videosLength - index,
            title: video.title,
            url: youtubeVideoUrl(youtubeID),
            thumb: youtubeThumbUrl(youtubeID),
            date: video.date,
            short: video.short,
            duration: toHHMMSS(getSecondsFromStrDuration(duration)),
            reactions,
            durationReactions: toHHMMSS(durationReactions),
        }
    });

    Object.keys(store.reactions).map(challenger => {
        // @ts-ignore
        return Object.entries(store.reactions[challenger]).map(([videoID, youtubeInfos]) => {
            // @ts-ignore
            const [youtubeID, duration] = youtubeInfos.split('|');
            if (!!youtubeID) {
                store.reactions[challenger][videoID] = {
                    url: youtubeVideoUrl(youtubeID),
                    thumb: youtubeThumbUrl(youtubeID),
                    duration: toHHMMSS(getSecondsFromStrDuration(duration)),
                };
            }
        });
    });

    preparedStores[storeIndex] = store;
})


// @ts-ignore
storedData.set(preparedStores);
