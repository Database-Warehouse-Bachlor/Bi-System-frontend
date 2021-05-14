import axios from "axios";
import React, { PureComponent, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Sector,
  ResponsiveContainer,
  Cell,
} from "recharts";
import AuthenticationService from "../../Services/AuthenticationService";

const EmployeeGender = () => {
  const [maleNr, setMaleNr] = useState();
  const [FemaleNr, setFemaleNr] = useState();

  const data = [
    { name: "Males", value: maleNr },
    { name: "Females", value: FemaleNr },
  ];
  const chart = () => {
    //Api call to the backend getting the information about Absence the last twelve months.
    //Authorizes using token stored in local storage.
    axios
      .get("web/employeenumber", {
        headers: {
          Authorization:
            "bearer " + AuthenticationService.getCurrentUser("currentUser"),
        },
      })
      .then((res) => {
        setMaleNr(res.data.numberOfMales);
        setFemaleNr(res.data.numberOfFemales);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const COLORS = ["#0088FE", "#00C49F"];


  let renderLabel = function(entry:any) {
      
    return entry.name;
}
  
  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      <ResponsiveContainer width="99%" height={250}>
        <PieChart width={1000} height={500}>
          <Pie
            data={data}
            labelLine={true}
            label = {renderLabel}
            outerRadius={80}
            fill="#eb6707"
            dataKey="value"
          />
          {data.map((entry, index) => (
            <Cell fill={COLORS[index % COLORS.length]} />
          ))}
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default EmployeeGender;
