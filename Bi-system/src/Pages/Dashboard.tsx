import Grid from "../Components/Grid";
import BarChart from "../Components/BarChart";
import LineBarChart from "../Components/LineBarChart";
import PieChart from "../Components/PieChart";
import { makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { DropdownButton, Dropdown, ButtonToolbar } from "react-bootstrap";
import Absence from "../Components/AbsenceRegisters/AbsenceRegisterChart";
import AccountRecLast12Months from "../Components/AccountReceivableCharts/AccountReceivableChart"
import AccountRecThisYear from "../Components/AccountReceivableCharts/AccountReceivableThisYearChart"
import AccountRecLastMonth from "../Components/AccountReceivableCharts/AccountReceivableMonthChart"
import AbsenceWeekly from "../Components/AbsenceRegisters/AbsenceRegisterWeeklyChart";
import AbsenceMontly from "../Components/AbsenceRegisters/AbsenceRegisterMonthlyChart";
import AbsenceThisYear from "../Components/AbsenceRegisters/AbsenceRegisterChartThisYear";
import AbsenceThisWeek from "../Components/AbsenceRegisters/AbsenceRegisterChartThisWeek";

import "bootstrap/dist/css/bootstrap.min.css";
import grey from "@material-ui/core/colors/grey";
import AuthenticationService from "../Services/AuthenticationService";
import axios from "axios";

/* useState hooks for storing values*/
function Dashboard() {
  const [accRes, setAccRes] = useState("");
  const [absence, setAbsence] = useState("");
  const [tennantName, setTennantName] = React.useState("");

  /* Api call for setting the name of the logged in tennant */
  axios
    .get("auth/tennantName", {
      headers: {
        Authorization:
          "bearer " + AuthenticationService.getCurrentUser("currentUser"),
      },
    })
    .then((res) => {
      //Re render the view with new data
      setTennantName(res.data);
    });

  /* Handles the filter value selected */
  const handleSelectAccRes = (e: any) => {
    setAccRes(e);
  };
  const handleSelectAbsence = (e: any) => {
    setAbsence(e);
  };
  /* Inline CSS used for styling */
  const useStyles = makeStyles((theme) => ({
    blackPaper: {
      backgroundColor: grey[50],
    },
    label: {
      display: "grid",
      gridAutoFlow: "column",
    },
    tennantName: {},
    background: {
      height: "100vh",
    },
  }));

  /* Switch cases for changing the view when the dropdown filter change happens 
  Une switchCase for each of the graphs*/
  function switchCaseAccountsReceivable() {
    switch (accRes) {
      case "Last 30 Days":
        console.log(accRes);
        return (
          <div>
            <AccountRecLastMonth />
          </div>
        );

      case "Last 12 Months":
        console.log(accRes);
        return (
          <div>
            <AccountRecLast12Months />
          </div>
        );

      case "thisYear":
        console.log(accRes);
        return (
          <div>
            <AccountRecThisYear />
          </div>
        );

      default:
        return (
          <div>
            <AccountRecThisYear />
          </div>
        );
    }
  }
  
  function switchCaseAbsence() {
    switch (absence) {
      case "Last 7 Days":
        console.log(absence);
        return (
          <div>
            <AbsenceWeekly />
          </div>
        );

      case "Last 30 Days":
        console.log(absence);
        return (
          <div>
            <AbsenceMontly />
          </div>
        );

      case "Last 12 Months":
        console.log(absence);
        return (
          <div>
            <Absence />
          </div>
        );
      case "This Week":
        console.log(absence);
        return (
          <div>
            <AbsenceThisWeek />
          </div>
        );
      case "This Year":
        console.log(absence);
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
    <div className={classes.background} data-testid="chartcontainer">
      {/* Grid justification */}
      <Grid row={true}>
        <Grid
          column={false}
          sm={12}
          md={12}
          justify={"center"}
          alignItems={"center"}
        >
          {/* sets the tennantname on top of the page */}
          <h1 className={classes.tennantName}>{tennantName}</h1>
        </Grid>
        <Grid
          column={true}
          sm={12}
          md={12}
          justify={"flex-end"}
          alignItems={"flex-end"}
        >
          <Paper className={classes.blackPaper} elevation={10}>
            <div className={classes.label}>
              <DropdownButton
                alignRight
                title={accRes || "This Year"}
                id="LineBarDrop"
                onSelect={handleSelectAccRes}
                data-testid="dropDownButton"
              >
                <Dropdown.Item eventKey="Last 30 Days">Last 30 Days</Dropdown.Item>
                <Dropdown.Item eventKey="Last 12 Months">Last 12 Months</Dropdown.Item>
                <Dropdown.Item eventKey="This Year"> This Year </Dropdown.Item>
              </DropdownButton>
              {/* Adding colums so that the title of the graph is on the right */}
              <h3></h3>
              <h3></h3>
              <h3></h3>
              <h3></h3>
              <h3></h3>
              <h3></h3>
              <h3></h3>
              <h3></h3>
              <h3></h3>
              <h3></h3>
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
                title={absence || "Last 12 Months"}
                id="absenceRegisterDrop"
                onSelect={handleSelectAbsence}
              >
                <Dropdown.Item eventKey="Last 7 Days">
                  Last 7 Days
                </Dropdown.Item>
                <Dropdown.Item eventKey="Last 30 Days">
                  Last 30 Days
                </Dropdown.Item>
                <Dropdown.Item eventKey="Last 12 Months">
                  {" "}
                  Last 12 Months{" "}
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="This Year"> This Year </Dropdown.Item>
                <Dropdown.Item eventKey="This Week"> This Week </Dropdown.Item>
              </DropdownButton>
              {/* Adding colums so that the title of the graph is on the right */}
              <h3></h3>
              <h3></h3>
              <h3></h3>
              <h3></h3>
              <h3></h3>
              <h3></h3>
              <h3></h3>
              <h3></h3>
              <h3></h3>
              <h3></h3>
              <h3>Absence data</h3>
            </div>
            {switchCaseAbsence()}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
