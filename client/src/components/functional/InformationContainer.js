import { Route, Switch } from "react-router-dom";
import MyMovements from "./myMovements/MyMovements";
import SummaryContainer from "./summary/SummaryContainer";

function InformationContainer() {
  return (
    <Switch>
      <Route path="/home/summary">
        <SummaryContainer />
      </Route>
      <Route path="/home">
        <MyMovements />
      </Route>
    </Switch>
  );
}

export default InformationContainer;
