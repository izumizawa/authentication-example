import React from "react";
import SignIn from "./Screens/SignIn/SignIn";
import Login from "./Screens/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store";

const App: React.FC = () => {
  return (
    <Router>
      <Provider store={Store}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Provider>
    </Router>
  );
};

export default App;
