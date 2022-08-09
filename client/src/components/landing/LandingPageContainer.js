import { Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LandingPageContainer() {
  return (
    <Switch>
      <Route path="/signup">
        <SignupForm />
      </Route>
      <Route path="/">
        <LoginForm />
      </Route>
    </Switch>
  );
}

export default LandingPageContainer;
