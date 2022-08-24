import "../App.css";
import { Route, Switch } from "react-router-dom";
import FunctionalContainer from "./functional/FunctionalContainer";
import LandingPageContainer from "./landing/LandingPageContainer";
import { useState, useEffect } from "react";

function App() {
  const [readyToLoad, setReadyToLoad] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Route path="/home">
          <FunctionalContainer readyToLoad={readyToLoad} />
        </Route>
        <Route path="/">
          <LandingPageContainer setReadyToLoad={setReadyToLoad} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
