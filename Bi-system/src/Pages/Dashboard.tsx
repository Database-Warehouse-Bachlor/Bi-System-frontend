import Grid from "../Components/Grid";
import BarChart from "../Components/BarChart";
import LineBarChart from "../Components/LineBarChart";
import PieChart from "../Components/PieChart";
import { makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Abcense from "../Components/AbsenceRegisterChart";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouteComponentProps } from "react-router-dom";
import grey from "@material-ui/core/colors/grey";

function Dashboard() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const handleSelect = (e: any) => {
    console.log(e);
    setValue(e);
  };
  const handleSelect2 = (e: any) => {
    console.log(e);
    setValue2(e);
  };
  const useStyles = makeStyles((theme) => ({

  blackPaper: {
    backgroundColor: grey[50],
  }

  }
));

  function switchCaseAccountsReceivable() {
    switch (value) {
      case "Weekly":
        console.log(value);
        return (
          <div>
            <Abcense />
          </div>
        );

      case "Monthly":
        console.log(value);
        return (
          <div>
            <LineBarChart />
          </div>
        );

      case "Yearly":
        console.log(value);
        return (
          <div>
            <PieChart />
          </div>
        );

      default:
        return (
          <div>
            <LineBarChart />
          </div>
        );
    }
  }
  function switchCaseAbsence() {
    switch (value2) {
      case "Weekly":
        console.log(value2);
        return (
          <div>
            <Abcense />
          </div>
        );

      case "Monthly":
        console.log(value2);
        return (
          <div>
            <LineBarChart />
          </div>
        );

      case "Yearly":
        console.log(value2);
        return (
          <div>
            <PieChart />
          </div>
        );

      default:
        return (
          <div>
            <LineBarChart />
          </div>
        );
    }
  }
  const classes = useStyles();
  return (
    <Grid row={true}>
      <Grid
        column={true}
        sm={12}
        md={12}
        justify={"flex-end"}
        alignItems={"stretch"}
      >
        

        <Paper className={classes.blackPaper}> 
        <DropdownButton
          alignRight
          title="Select range"
          id="LineBarDrop"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="Weekly">Weekly</Dropdown.Item>
          <Dropdown.Item eventKey="Monthly">Monthly</Dropdown.Item>
          <Dropdown.Item eventKey="Yearly"> Yearly </Dropdown.Item>
        </DropdownButton>
        {switchCaseAccountsReceivable()}
        </Paper>
      </Grid>
      <Grid column={true} sm={12} md={12} alignItems={"center"}>
       
        <Paper>
        <DropdownButton
          alignRight
          title="Select range"
          id="absenceRegisterDrop"
          onSelect={handleSelect2}
        >
          <Dropdown.Item eventKey="Weekly">Weekly</Dropdown.Item>
          <Dropdown.Item eventKey="Monthly">Monthly</Dropdown.Item>
          <Dropdown.Item eventKey="Yearly" active>
            Yearly
          </Dropdown.Item>
        </DropdownButton>
          {switchCaseAbsence()}
        
        </Paper>
      </Grid>
      <Grid alignItems={"stretch"} column={true} sm={12} md={4}>
        <Paper>
          <PieChart />
        </Paper>
      </Grid>

      <Grid column={true} sm={12} md={4} alignItems={"stretch"}>
        <Paper >
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
