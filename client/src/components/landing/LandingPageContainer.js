import { Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LandingPageContainer() {
  return (
    <div class="flex flex-col justify-center md:flex-row md:items-center md:justify-around h-screen">
      <div class="mt-200 sm:mt-0">
        <h1 class="font-heading_cursive font-bold text-7xl">
          {"(the joy of)"}
        </h1>
        <h1 class="font-heading_bold text-9xl">Movement</h1>
      </div>
      <div class="justify-justify-around">
        <Switch>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/">
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default LandingPageContainer;
