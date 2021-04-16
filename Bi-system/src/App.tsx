import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Header from "./Header";
import AddUser from "./Pages/AddUser";
import grey from "@material-ui/core/colors/brown";
import Logout from "./Pages/Logout";
import PrivateRoute from "./Components/PrivateRoute";
require('./App.css')
function App() {

  
  return (
    <div style={{background: grey[100]}}>
    <Router>
      {<Header />}
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/" exact component={Login} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/AddUser" exact component={AddUser} />
        <Route path="/logout" exact component={Logout} />
      </Switch>
    </Router>
    </div>

  );
}

export default App;
