import { Route, Switch } from "react-router-dom";
import MyMovements from "./myMovements/MyMovements";
import SummaryContainer from "./summary/SummaryContainer";

function InformationContainer() {
  return (
    <Switch>
      <Route path="/home/details">
        <MyMovements />
      </Route>
      <Route path="/home">
        <SummaryContainer />
      </Route>
    </Switch>
  );
}

export default InformationContainer;
