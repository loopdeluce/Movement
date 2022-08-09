import { Route, Switch } from "react-router-dom";
import SessionSummary from "./SessionSummary";
import SportChoose from "./SportChoose";
import Timer from "./Timer";

function TrackerContainer() {
  return (
    <Switch>
      <Route path="/home/tracker/sport">
        <SportChoose />
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
