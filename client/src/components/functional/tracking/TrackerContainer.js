import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import SessionForm from "./SessionForm";
import MovementChoose from "./MovementChoose";
import Timer from "./Timer";

function TrackerContainer() {
  const [movementTypes, setMovementTypes] = useState([]);
  const [selectedMovement, setSelectedMovement] = useState("");
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
    sessionStorage.setItem("movementFinish", "");
  }

  function handleSessionReset() {
    handleMovementReset();

    setSessionMovements([]);
    setSessionStartDateTime("");
    sessionStorage.removeItem("sessionId");
    sessionStorage.removeItem("sessionMovements");
    sessionStorage.removeItem("sessionStart");
    sessionStorage.removeItem("sessionTitle");
  }

  function addSessionStartDatetime() {
    if (sessionStorage.getItem("sessionStart") === null) {
      const start = new Date();
      setSessionStartDateTime(start);
      sessionStorage.setItem("sessionStart", start);
    }
  }

  function addMovementFinishDatetime() {
    const finish = new Date();
    sessionStorage.setItem("movementFinish", finish);
  }

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
          sessionMovements={sessionMovements}
          addMovementFinishDatetime={addMovementFinishDatetime}
        />
      </Route>
      <Route path="/home/tracker/session">
        <SessionForm
          movementTypes={movementTypes}
          handleSelection={handleSelection}
          handleSessionReset={handleSessionReset}
          handleMovementReset={handleMovementReset}
        />
      </Route>
    </Switch>
  );
}

export default TrackerContainer;
