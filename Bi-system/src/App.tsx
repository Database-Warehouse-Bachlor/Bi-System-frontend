import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Header from "./Header";
import AddUser from "./Pages/AddUser";
import grey from "@material-ui/core/colors/brown";
import Logout from "./Pages/Logout";
import PrivateRoute from "./Components/PrivateRoute";
import { Helmet } from 'react-helmet'
require('./App.css')
function App() {

  /* Route service for the web app
  Private Route redirects back to login if not logged in, cant watch dashboard
  or add user if not logged in. */
  return (    
    <Router>
      {<Header />}
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Login} />
        <PrivateRoute path="/AddUser" exact component={AddUser} />
        <PrivateRoute path="/logout" exact component={Logout} />
      </Switch>
    </Router>
   


  );
}

export default App;
