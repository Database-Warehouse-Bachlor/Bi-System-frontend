import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Header from "./Header";
import AddUser from "./Pages/AddUser";
function App() {
  return (
    <Router>
      {<Header />}
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/dashboard" exact component={Login} />
        <Route path="/AddUser" exact component={AddUser} />
      </Switch>
    </Router>
  );
}

export default App;
