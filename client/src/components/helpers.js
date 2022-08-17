export function monthDay(date = new Date()) {
  const newDate = new Date(date);
  return `${String(newDate.getMonth() + 1).padStart(2, "0")}/${String(
    newDate.getDate()
  ).padStart(2, "0")}`;
}

export function timeOfDay(date = new Date()) {
  const hour = new Date(date).getHours();
  if (hour < 12) {
    return "Morning";
  } else if (hour >= 12 && hour < 5) {
    return "Afternoon";
  } else {
    return "Evening";
  }
}

export function secondsToHoursMinutesSeconds(seconds) {
  const secondCounter = seconds % 60;
  const minuteCounter = Math.floor(seconds / 60);
  const hourCounter = Math.floor(seconds / 360);

  const computedSecond =
    String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
  const computedMinute =
    String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;
  const computedHour =
    String(hourCounter).length === 1 ? `0${hourCounter}` : hourCounter;

  return `${computedHour}:${computedMinute}:${computedSecond}`;
}
