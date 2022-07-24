export const formatYYYYMMDDHHMMSS = () => {
    const currentDate = new Date();

    let year = currentDate.getFullYear();

    let month = `0${(currentDate.getMonth() + 1)}`;
    month = month.substring(month.length - 2);

    let day = `0${(currentDate.getDay())}`;
    day = day.substring(day.length - 2);
    
    let hours = `0${(currentDate.getHours())}`;
    hours = hours.substring(hours.length - 2);
    
    let minutes = `0${(currentDate.getMinutes())}`;
    minutes = minutes.substring(minutes.length - 2);
    
    let seconds = `0${(currentDate.getSeconds())}`;
    seconds = seconds.substring(seconds.length - 2);
    
    let milliseconds = `000${(currentDate.getMilliseconds())}`;
    milliseconds = milliseconds.substring(milliseconds.length - 3);
    
    return (
        `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`
    )
}