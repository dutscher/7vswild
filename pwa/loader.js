(() => {
    const pre = '[PWA Loader]';

    window.addEventListener('DOMContentLoaded', () => {
        if ('serviceWorker' in navigator) {
            console.log(pre, 'init service worker')
            const sw = navigator.serviceWorker.register('./service-worker.js?cb=' + window.cacheBuster);
        }
    }, { once: true });
})()
