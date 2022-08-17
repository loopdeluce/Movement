import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import SessionForm from "./SessionForm";
import MovementChoose from "./MovementChoose";
import Timer from "./Timer";

function TrackerContainer() {
  const [movementTypes, setMovementTypes] = useState([]);
  const [selectedMovement, setSelectedMovement] = useState("eBike Ride");
  const [sessionMovements, setSessionMovements] = useState([]);
  const [sessionStartDatetime, setSessionStartDateTime] = useState("");
  const [second, setSecond] = useState(
    parseInt(sessionStorage.getItem("second")) > 0
      ? sessionStorage.getItem("second")
      : "00"
  );
  const [minute, setMinute] = useState(
    parseInt(sessionStorage.getItem("minute")) > 0
      ? sessionStorage.getItem("minute")
      : "00"
  );
  const [hour, setHour] = useState(
    parseInt(sessionStorage.getItem("hour")) > 0
      ? sessionStorage.getItem("hour")
      : "00"
  );
  const [counter, setCounter] = useState(
    parseInt(sessionStorage.getItem("counter")) > 0
      ? parseInt(sessionStorage.getItem("counter"))
      : 0
  );

  useEffect(() => {
    fetch("/movement_types")
      .then((response) => response.json())
      .then((movements) => setMovementTypes(movements));
  }, []);

  function handleSelection(currentSelection) {
    setSelectedMovement(currentSelection);
  }

  function handleMovementReset() {
    setSelectedMovement("");
    setSecond("00");
    setMinute("00");
    setHour("00");
    setCounter(0);

    sessionStorage.setItem("selectedMovement", "");
    sessionStorage.setItem("second", "00");
    sessionStorage.setItem("minute", "00");
    sessionStorage.setItem("hour", "00");
    sessionStorage.setItem("counter", 0);
  }

  function handleSessionReset() {
    handleMovementReset();
    setSessionMovements([]);
  }

  function addSessionStartDatetime() {
    if (sessionStartDatetime === "") {
      const start = new Date();
      setSessionStartDateTime(start);
      sessionStorage.setItem("SessionStart", start);
    }
  }

  let testDate = new Date();
  console.log(testDate);

  return (
    <Switch>
      <Route path="/home/tracker/movement">
        {movementTypes.length > 0 ? (
          <MovementChoose
            movementTypes={movementTypes}
            selectedMovement={selectedMovement}
            handleSelection={handleSelection}
          />
        ) : null}
      </Route>
      <Route path="/home/tracker/record">
        <Timer
          selectedMovement={selectedMovement}
          second={second}
          setSecond={setSecond}
          minute={minute}
          setMinute={setMinute}
          hour={hour}
          setHour={setHour}
          counter={counter}
          setCounter={setCounter}
          addSessionStartDatetime={addSessionStartDatetime}
        />
      </Route>
      <Route path="/home/tracker/session">
        <SessionForm
          selectedMovement={selectedMovement}
          movementTypes={movementTypes}
          handleSelection={handleSelection}
          handleSessionReset={handleSessionReset}
          handleMovementReset={handleMovementReset}
          sessionMovements={sessionMovements}
        />
      </Route>
    </Switch>
  );
}

export default TrackerContainer;
