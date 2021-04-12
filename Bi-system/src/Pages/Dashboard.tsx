import Grid from "../Components/Grid";
import BarChart from "../Components/BarChart";
import LineBarChart from "../Components/LineBarChart";
import PieChart from "../Components/PieChart";
import { Paper } from "@material-ui/core";
import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import absence from "../Components/AbsenceRegisterChart";
import Abcense from "../Components/AbsenceRegisterChart";
import 'bootstrap/dist/css/bootstrap.min.css';
function Dashboard() {
  return (
    <Grid row={true}>
      <Grid column={true} sm={12} md={12} justify={"flex-end"} alignItems={"stretch"}>
        
      <DropdownButton id="dropdown-basic-button" title="Change view">
  <Dropdown.Item href="#/action-1">Weekly</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Monthly</Dropdown.Item>
  <Dropdown.Item href="#/action-3" active >Yearly</Dropdown.Item>
</DropdownButton>

        <Paper>
          <LineBarChart />
        </Paper>
      </Grid>
      <Grid column={true} sm={12} md={12} alignItems={"center"}>
        <Paper>
          <Abcense />
        </Paper>
      </Grid>
      <Grid alignItems={"stretch"} column={true} sm={12} md={4}>
        <Paper>
          <PieChart />
        </Paper>
      </Grid>

      <Grid column={true} sm={12} md={4} alignItems={"stretch"}>
        <Paper>
          <BarChart />
        </Paper>
      </Grid>
      <Grid column={true} sm={12} md={4}>
        <Paper>
          <BarChart />
        </Paper>
      </Grid>
      <Grid column={true} sm={12} md={4}>
        <Paper>
          <PieChart />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
