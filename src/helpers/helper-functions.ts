// Formats the time in milliseconds to a string in the format of "hh:mm:ss" or "mm:ss" if the time is less than an hour.
export const formatTime = (startTimeMs: number, endTimeMs: number) => {
  const secondAsMilliseconds = 1000;
  const minuteAsMilliseconds = secondAsMilliseconds * 60;
  const hourAsMilliseconds = minuteAsMilliseconds * 60;

  const distance = endTimeMs - startTimeMs;
  const seconds = Math.floor((distance / secondAsMilliseconds) % 60).toString().padStart(2, "0");
  let minutes = Math.floor((distance / minuteAsMilliseconds) % 60).toString()
  if (distance < hourAsMilliseconds) return `${minutes}:${seconds}`;

  minutes = minutes.padStart(2, "0");
  const hours = Math.floor(distance / hourAsMilliseconds).toString()
  return `${hours}:${minutes}:${seconds}`;
}

