export function Date_Time(value, showHour){
    const dateObj = new Date(value);
    if (showHour) {
      const outputString = ("0" + dateObj.getDate()).slice(-2) + "/" +
      ("0" + (dateObj.getMonth() + 1)).slice(-2) + "/" +
      dateObj.getFullYear() + " ";
      return outputString
    } else {
      const outputString = ("0" + dateObj.getDate()).slice(-2) + "/" +
      ("0" + (dateObj.getMonth() + 1)).slice(-2) + "/" +
      dateObj.getFullYear() + " " +
      ("0" + dateObj.getHours()).slice(-2) + ":" +
      ("0" + dateObj.getMinutes()).slice(-2) + ":00";
      return outputString
    }
}