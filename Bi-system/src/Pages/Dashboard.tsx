import Grid from "../Components/Grid";
import BarChart from "../Components/BarChart";
import LineBarChart from "../Components/LineBarChart";
import PieChart from "../Components/PieChart";
import { makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { DropdownButton, Dropdown, ButtonToolbar } from "react-bootstrap";
import Abcense from "../Components/AbsenceRegisterChart";
import AbcenseWeekly from "../Components/AbsenceRegisterWeeklyChart";
import AbcenseMontly from "../Components/AbsenceRegisterMonthlyChart";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouteComponentProps } from "react-router-dom";
import grey from "@material-ui/core/colors/grey";
import PropTypes from "prop-types";

function Dashboard() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [active, setActive] = useState<boolean>(false);

  const handleSelect = (e: any) => {
    console.log(e);
    setValue(e);
  };
  const handleSelect2 = (e: any) => {
    console.log(e);
    setValue2(e);
    setActive(true);
  };
  const useStyles = makeStyles((theme) => ({
    blackPaper: {
      backgroundColor: grey[50],
    },
    label: {
      display: "grid",
      gridAutoFlow: "column",
    },
  }));

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
            <AbcenseWeekly />
          </div>
        );

      case "Monthly":
        console.log(value2);
        return (
          <div>
            <AbcenseMontly />
          </div>
        );

      case "Yearly":
        console.log(value2);
        return (
          <div>
            <Abcense />
          </div>
        );

      default:
        return (
          <div>
            <Abcense />
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
        <Paper className={classes.blackPaper} elevation={10}>
          <div className={classes.label}>
            

            <DropdownButton
              alignRight
              title={value || "Yearly"}
              id="LineBarDrop"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="Weekly">Weekly</Dropdown.Item>
              <Dropdown.Item eventKey="Monthly">Monthly</Dropdown.Item>
              <Dropdown.Item eventKey="Yearly"> Yearly </Dropdown.Item>
            </DropdownButton>

            <h3>Accounts receivable</h3>

          </div>

          {switchCaseAccountsReceivable()}
        </Paper>
      </Grid>
      <Grid column={true} sm={12} md={12} alignItems={"center"}>
        <Paper className={classes.blackPaper} elevation={10}>
        <div className={classes.label}>

          <DropdownButton
            alignRight
            title={value2 || "Yearly"}
            id="absenceRegisterDrop"
            onSelect={handleSelect2}
          >
            <Dropdown.Item eventKey="Weekly">Weekly</Dropdown.Item>
            <Dropdown.Item eventKey="Monthly">Monthly</Dropdown.Item>
            <Dropdown.Item eventKey="Yearly"> Yearly </Dropdown.Item>
          </DropdownButton>
          <h3>Absence data</h3>
          </div>
          {switchCaseAbsence()}
        </Paper>
      </Grid>
      <Grid alignItems={"stretch"} column={true} sm={12} md={4}>
        <Paper className={classes.blackPaper} elevation={10}>
          <PieChart />
        </Paper>
      </Grid>

      <Grid column={true} sm={12} md={4} alignItems={"stretch"}>
        <Paper className={classes.blackPaper} elevation={10}>
          <BarChart />
        </Paper>
      </Grid>
      <Grid column={true} sm={12} md={4}>
        <Paper className={classes.blackPaper} elevation={10}>
          <BarChart />
        </Paper>
      </Grid>
      <Grid column={true} sm={12} md={4}>
        <Paper className={classes.blackPaper} elevation={10}>
          <PieChart />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
