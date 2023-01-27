function formatReleaseDate(number: number) {
    const now = new Date();
    let time = now.getTime() / 1000;

    let result: string = '';
    let hour: number = 0;
    let minute: number = 0;
    let timeFormat = Math.ceil(time - number);
    let day: number = timeFormat / (3600 * 24);
    if (Math.floor(day) > 1) {
        result = `${Math.floor(day)} ngày trước`;
    } else if (Math.floor(day) === 1) {
        result = `Hôm qua`;
    } else {
        hour = day * 24;
        if (hour >= 1) {
            result = `${Math.floor(hour)} giờ trước`;
        } else {
            minute = hour * 60;
            result = `${Math.floor(minute)} phút trước`;
        }
    }

    return result;
}

export default formatReleaseDate;
