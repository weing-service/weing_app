export const DateToString = (date) => {
    // Date -> "yyyy-mm-dd"
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const dateString = year + "-" + month + "-" + day;
    
    return dateString;
}