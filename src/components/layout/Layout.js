import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../home/Home";
import Login from "../login/Login";

function Layout() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Layout;
