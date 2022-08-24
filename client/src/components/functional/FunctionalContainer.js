import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import MainContainer from "./MainContainer";
import TrackerContainer from "./tracking/TrackerContainer";

function FunctionalContainer({ readyToLoad }) {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home/tracker">
          <TrackerContainer />
        </Route>
        <Route path="/home">
          <MainContainer readyToLoad={readyToLoad} />
        </Route>
      </Switch>
    </div>
  );
}

export default FunctionalContainer;
