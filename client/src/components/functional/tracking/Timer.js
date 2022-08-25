import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Timer({
  selectedMovement,
  setSecond,
  setMinute,
  setHour,
  counter,
  setCounter,
  addSessionStartDatetime,
  sessionMovements,
  addMovementFinishDatetime,
}) {
  const [isActive, setIsActive] = useState(false);
  const history = useHistory();

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);
        const hourCounter = Math.floor(counter / 360);

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;
        const computedHour =
          String(hourCounter).length === 1 ? `0${hourCounter}` : hourCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);
        setHour(computedHour);

        sessionStorage.setItem("second", computedSecond);
        sessionStorage.setItem("minute", computedMinute);
        sessionStorage.setItem("hour", computedHour);
        sessionStorage.setItem("counter", counter);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function handleChangeMovement(e) {
    e.preventDefault();

    if (isActive) {
      return null;
    } else {
      history.push("/home/tracker/movement");
    }
  }

  function handleStartStop() {
    setIsActive((isActive) => !isActive);
    if (isActive) {
      addMovementFinishDatetime();
      history.push("/home/tracker/session");
    } else {
      if (sessionStorage.getItem("sessionMovements") === null) {
        addSessionStartDatetime();
      }
    }
  }

  return (
    <div class="flex justify-center">
      <div class="my-10 bg-white rounded-2xl w-9/12 py-7 px-10">
        <div class="flex justify-between">
          <h2 class=" text-xl  text-left text-black sm:text-4xl font-heading_bold">
            <span class="font-normal text-gray-400">Movement:</span>{" "}
            {selectedMovement}
          </h2>
          <h3
            class={` text-md sm:text-lg ${
              isActive ? "text-gray-400" : "text-jungle hover:underline"
            }`}
            onClick={handleChangeMovement}
          >
            Change Movement
          </h3>
        </div>
        <div class="my-20">
          <h3 class="text-lg text-gray-400">TIME:</h3>
          <div class="font-extrabold text-6xl">
            {sessionStorage.getItem("hour") === null
              ? "00"
              : sessionStorage.getItem("hour")}
            :
            {sessionStorage.getItem("minute") === null
              ? "00"
              : sessionStorage.getItem("minute")}
            :
            {sessionStorage.getItem("second") === null
              ? "00"
              : sessionStorage.getItem("second")}
          </div>
        </div>

        <div class={`flex justify-center`} onClick={handleStartStop}>
          <button
            class={`font-bold text-lg p-4 w-35 rounded-full ${
              isActive
                ? "bg-white border-2 border-jungle text-jungle hover:bg-jungle_200 "
                : "bg-jungle text-white hover:bg-jungle_500 border-2 border-jungle"
            }`}
          >
            {isActive ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
