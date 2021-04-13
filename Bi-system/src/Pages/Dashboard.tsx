import Grid from "../Components/Grid";
import BarChart from "../Components/BarChart";
import LineBarChart from "../Components/LineBarChart";
import PieChart from "../Components/PieChart";
import { Paper } from "@material-ui/core";
import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Abcense from "../Components/AbsenceRegisterChart";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouteComponentProps } from "react-router-dom";


function Dashboard() {
  const [value,setValue]=useState('');
  const handleSelect=(e: any)=>{
    console.log(e);
    setValue(e)
  }
    function test(){
      return <div><Abcense/></div>;
    }
    
    function switchCase() {

    switch (value) { 
      case "Weekly":  
      console.log(value)
      return <div><Abcense/></div>;

      case "Monthly": 
      console.log(value)
      return <div><LineBarChart/></div>;
      
      case "Yearly":  
      console.log(value)
      return <div><PieChart/></div>;
      default: return <div><Abcense/></div>;


    } 
  }


  return (
    <Grid row={true}>
      <Grid
        column={true}
        sm={12}
        md={12}
        justify={"flex-end"}
        alignItems={"stretch"}
      >
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
        
        <Paper>
        {switchCase()}
        </Paper>
      </Grid>
      <Grid column={true} sm={12} md={12} alignItems={"center"}>
      <DropdownButton      alignRight
          title="Dropdown right"
          id="absenceRegisterDrop"
          onSelect={handleSelect}>
          <Dropdown.Item href="#/action-1">Weekly</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Monthly</Dropdown.Item>
          <Dropdown.Item href="#/action-3" active>
            Yearly
          </Dropdown.Item>
        </DropdownButton>
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
  