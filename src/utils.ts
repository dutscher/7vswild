// 1:04:54
// 18:16
export const getSecondsFromStrDuration = (strDuration) => {
    return strDuration.split(':').reduce((acc, time) => (60 * acc) + +time);
}

export const toHHMMSS = (secs) => {
    const sec_num = parseInt(secs, 10)
    const hours   = Math.floor(sec_num / 3600)
    const minutes = Math.floor(sec_num / 60) % 60
    const seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
}
