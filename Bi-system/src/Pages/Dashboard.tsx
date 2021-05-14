import Grid from "../Components/Grid";
import { makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { DropdownButton, Dropdown, ButtonToolbar } from "react-bootstrap";
import Absence from "../Components/AbsenceRegisters/AbsenceRegisterChart";
import AccountRecLast12Months from "../Components/AccountReceivableCharts/AccountReceivableChart";
import EmployeeGender from "../Components/PieCharts/EmloyeeGender";
import ClientPie from "../Components/PieCharts/ClientType";
import AccountRecThisYear from "../Components/AccountReceivableCharts/AccountReceivableThisYearChart";
import AccountRecLastMonth from "../Components/AccountReceivableCharts/AccountReceivableMonthChart";
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
  const [accResName, setAccResName] = useState("");
  const [absence, setAbsence] = useState("");
  const [absenceName, setAbsenceName] = useState("");
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
    if (e == "Last 30 Days") {
      setAccResName("Siste 30 Dager");
    } else if (e == "thisYear") {
      setAccResName("Dette Året");
    } else if (e == "Last 12 Months") {
      setAccResName("Siste 12 Måneder");
    }
    setAccRes(e);
  };
  const handleSelectAbsence = (e: any) => {
    if (e == "Last 7 Days") {
      setAbsenceName("Siste 7 Dager");
    }
    if (e == "Last 30 Days") {
      setAbsenceName("Siste 30 Dager");
    } else if (e == "thisYear") {
      setAbsenceName("Dette Året");
    } else if (e == "thisWeek") {
      setAbsenceName("Denne Uken");
    } else if (e == "Last 12 Months") {
      setAbsenceName("Siste 12 Måneder");
    }
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
      height: "120vh",
    },
    pieChart: {
      textAlign: "center" as "center"
    },
    dropdown: {
      backgroundColor = "#000000"
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
      case "thisWeek":
        console.log(absence);
        return (
          <div>
            <AbsenceThisWeek />
          </div>
        );
      case "thisYear":
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
              <DropdownButton className={classes.dropdown}
                alignRight
                title={accResName || "Dette Året"}
                id="LineBarDrop"
                onSelect={handleSelectAccRes}
                data-testid="dropDownButton"
              >
                <Dropdown.Item eventKey="Last 30 Days">
                  Siste 30 dager
                </Dropdown.Item>
                <Dropdown.Item eventKey="Last 12 Months">
                  Siste 12 Måneder
                </Dropdown.Item>
                <Dropdown.Item eventKey="thisYear"> Dette Året </Dropdown.Item>
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
              <h3>Kundefordringer</h3>
            </div>

            {switchCaseAccountsReceivable()}
          </Paper>
        </Grid>
        <Grid column={true} sm={12} md={12} alignItems={"center"}>
          <Paper className={classes.blackPaper} elevation={10}>
            <div className={classes.label}>
              <DropdownButton
                alignRight
                title={absenceName || "Siste 12 Måneder"}
                id="absenceRegisterDrop"
                onSelect={handleSelectAbsence}
              >
                <Dropdown.Item eventKey="Last 7 Days">
                  Siste 7 dager
                </Dropdown.Item>
                <Dropdown.Item eventKey="Last 30 Days">
                  Siste 30 dager
                </Dropdown.Item>
                <Dropdown.Item eventKey="Last 12 Months">
                  {" "}
                  Siste 12 Måneder{" "}
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="thisYear"> Dette året </Dropdown.Item>
                <Dropdown.Item eventKey="thisWeek"> Denne Uken </Dropdown.Item>
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
              <h3>Fraværsdata</h3>
            </div>
            {switchCaseAbsence()}
          </Paper>
        </Grid>
        <Grid
          column={true}
          sm={12}
          md={4}
          justify={"flex-end"}
          alignItems={"flex-end"}
        >
          <Paper className={classes.blackPaper} elevation={10}>
          <h3 className ={classes.pieChart}>Klienttyper</h3>
          <ClientPie/>
          </Paper>
          </Grid>
          <Grid
          column={true}
          sm={12}
          md={4}
          justify={"flex-end"}
          alignItems={"flex-end"}
        >
          <Paper className={classes.blackPaper} elevation={10}>
            
          <h3 className ={classes.pieChart}>Kjønnsfordeling</h3> 
          <EmployeeGender/>
          </Paper>
          </Grid>
          
        
      </Grid>
    </div>
  );
}

export default Dashboard;
