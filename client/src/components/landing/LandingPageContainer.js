import { Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LandingPageContainer() {
  return (
    <div class="flex">
      <h1>the joy of Movement</h1>
      <Switch>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route path="/">
          <LoginForm />
        </Route>
      </Switch>
    </div>
  );
}

export default LandingPageContainer;
