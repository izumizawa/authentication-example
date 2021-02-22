import React from "react";
import SignIn from "./Screens/SignIn/SignIn";
import Login from "./Screens/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
