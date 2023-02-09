function formatDate(sec: number) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(sec);

    const today = new Date(t);
    const yyyy = today.getFullYear();
    let mm: any = today.getMonth() + 1; // Months start at 0!
    let dd: any = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    return formattedToday;
}

export default formatDate;
