export default function dateFormat(str, type) {
    let date = new Date(str);
    let year = date.getFullYear();
    let month = formatZero(date.getMonth() + 1, 2);
    let day = formatZero(date.getDate(), 2);
    let hour = formatZero(date.getHours(), 2);
    let minute = formatZero(date.getMinutes(), 2);
    let seconds = formatZero(date.getSeconds(), 2);
    if (type == "YYYY-MM-DD") {
      return `${year}-${month}-${day}`;
      // console.log(`${year}-${month}-${day}`)
    } else if (type == "YYYY-MM-DD HH:MM:SS") {
      return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`;
      // console.log(`${year}-${month}-${day} ${hour}:${minute}:${seconds}`)
    } else if (type == "MM/DD  HH:MM:SS") {
      return `${month}/${day} ${hour}:${minute}:${seconds}`;
      // console.log(`${month}/${day} ${hour}:${minute}:${seconds}`)
    }
  };

  function formatZero(num, len) {
    if (String(num).length > len) return num
    return (Array(len).join(0) + num).slice(-len)
  }



