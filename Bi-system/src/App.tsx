import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Header from "./Header";
import AddUser from "./Pages/AddUser";
import Logout from "./Pages/Logout";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  /* Route service for the web app
  Private Route redirects back to login if not logged in, cant watch dashboard
  or add user if not logged in. */
  return (
    <Router>
      {<Header />}
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/AddUser" exact component={AddUser} />
        <PrivateRoute path="/logout" exact component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
