import { Route, Switch } from "react-router-dom";
import MyMovements from "./myMovements/MyMovements";
import SummaryContainer from "./summary/SummaryContainer";

function InformationContainer({ readyToLoad }) {
  return (
    <Switch>
      <Route path="/home/details">
        <MyMovements />
      </Route>
      <Route path="/home">
        <SummaryContainer readyToLoad={readyToLoad} />
      </Route>
    </Switch>
  );
}

export default InformationContainer;
