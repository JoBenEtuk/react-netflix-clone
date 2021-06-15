import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import custom components.
import Home from "../home/Home";
import Login from "../login/Login";

function Layout() {
  return (
    <>
      <Router>
        <Switch>
          {/* Home Route */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* End Home Route */}
          {/* Login Route */}
          <Route exact path="/login">
            <Login />
          </Route>
          {/* End Login Route */}
        </Switch>
      </Router>
    </>
  );
}

export default Layout;
