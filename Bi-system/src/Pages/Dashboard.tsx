import Grid from "../Components/Grid";
import BarChart from "../Components/BarChart";
import LineBarChart from "../Components/LineBarChart";
import PieChart from "../Components/PieChart";
import { makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { DropdownButton, Dropdown, ButtonToolbar } from "react-bootstrap";
import Absence from "../Components/AbsenceRegisters/AbsenceRegisterChart";
import AbsenceWeekly from "../Components/AbsenceRegisters/AbsenceRegisterWeeklyChart";
import AbsenceMontly from "../Components/AbsenceRegisters/AbsenceRegisterMonthlyChart";
import AbsenceThisYear from "../Components/AbsenceRegisters/AbsenceRegisterChartThisYear";
import AbsenceThisWeek from "../Components/AbsenceRegisters/AbsenceRegisterChartThisWeek";

import "bootstrap/dist/css/bootstrap.min.css";
import { RouteComponentProps } from "react-router-dom";
import grey from "@material-ui/core/colors/grey";
import PropTypes from "prop-types";
import AuthenticationService from "../Services/AuthenticationService";
import AddUser from "../Services/AddUserService";

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
            <Absence />
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
      case "Last 7 Days":
        console.log(value2);
        return (
          <div>
            <AbsenceWeekly />
          </div>
        );

      case "Last 30 Days":
        console.log(value2);
        return (
          <div>
            <AbsenceMontly />
          </div>
        );

      case "Last 12 Months":
        console.log(value2);
        return (
          <div>
            <Absence />
          </div>
        );
        case "This Week":
        console.log(value2);
        return (
          <div>
            <AbsenceThisWeek />
          </div>
        );
        case "This Year":
          console.log(value2);
          return (
            <div>
              <AbsenceThisYear />
            </div>
          );

      default:
        return (
          <div>
            <Absence />
          </div>
        );
    }
  }
  const classes = useStyles();
  return (
    <div className="tennantName" >
      <h1>{AddUser.getTennantName}</h1>
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
            title={value2 || "Last 12 Months"}
            id="absenceRegisterDrop"
            onSelect={handleSelect2}
          >
            <Dropdown.Item eventKey="Last 7 Days">Last 7 Days</Dropdown.Item>
            <Dropdown.Item eventKey="Last 30 Days">Last 30 Days</Dropdown.Item>
            <Dropdown.Item eventKey="Last 12 Months"> Last 12 Months </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="This Year"> This Year </Dropdown.Item>
            <Dropdown.Item eventKey="This Week"> This Week </Dropdown.Item>

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
    </div>
  );
}

export default Dashboard;
