function formatTime(number: number) {
    let minutes: number = Math.floor(number / 60);
    let seconds: number | string = Math.floor(number - minutes * 60);

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    return `${minutes}:${seconds}`;
}

export default formatTime;
