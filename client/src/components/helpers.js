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
  } else if (hour >= 12 && hour < 17) {
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

export function buildFormattedDatetime(date = new Date()) {
  const formattedDate = new Date(date).toString();
  let hours = new Date(date).getHours();
  hours = ((hours + 11) % 12) + 1;
  hours = hours.toString();
  const minutes = new Date(date).getMinutes().toString().padStart(2, "0");
  return `${formattedDate.substring(0, 15)} • ${hours.padStart(
    2,
    "0"
  )}:${minutes} ${hours > 11 ? "PM" : "AM"}`;
}

export function quantitativeExertion(exertion) {
  switch (exertion) {
    case 1:
      return "Restorative";
    case 2:
      return "Very Easy";
    case 3:
      return "Easy";
    case 4:
      return "Moderate";
    case 5:
      return "Moderate";
    case 6:
      return "Moderate";
    case 7:
      return "Somewhat Hard";
    case 8:
      return "Hard";
    case 9:
      return "Difficult";
    case 10:
      return "Max Effort";
  }
}
