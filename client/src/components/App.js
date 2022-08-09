import "../App.css";
import { Route, Switch } from "react-router-dom";
import FunctionalContainer from "./functional/FunctionalContainer";
import LandingPageContainer from "./landing/LandingPageContainer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home">
          <FunctionalContainer />
        </Route>
        <Route path="/">
          <LandingPageContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
