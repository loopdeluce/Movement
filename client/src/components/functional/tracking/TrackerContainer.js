import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import SessionSummary from "./SessionSummary";
import MovementChoose from "./MovementChoose";
import Timer from "./Timer";
import MovementCard from "./MovementCard";

function TrackerContainer() {
  const [movementTypes, setMovementTypes] = useState([]);
  const [selectedMovement, setSelectedMovement] = useState("eBike Ride");

  useEffect(() => {
    fetch("/movement_types")
      .then((response) => response.json())
      .then((movements) => setMovementTypes(movements));
  }, []);

  function handleSelection(currentSelection) {
    setSelectedMovement(currentSelection);
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
        <Timer />
      </Route>
      <Route path="/home/tracker/session">
        <SessionSummary />
      </Route>
    </Switch>
  );
}

export default TrackerContainer;
