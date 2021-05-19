import axios from "axios";
import React, { PureComponent, useState, useEffect } from "react";
import AuthenticationService from "../../Services/AuthenticationService";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ClientCity = () => {
  //Stores the chart data as a state
  const [chartData, setChartData] = useState();

  const chart = () => {
    //Api call to the backend getting the information about Absence the last twelve months.
    //Authorizes using token stored in local storage.
    axios
      .get("web/customerzones", {
        headers: {
          Authorization:
            "bearer " + AuthenticationService.getCurrentUser("currentUser"),
        },
      })
      .then((res) => {
        //Alters the Json data to fit the chart in a specific way.
        var data = res.data;
      
        setChartData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    //Makes the Chart responsive
    <ResponsiveContainer width="99%" height={250}>
      {/* Generates a BarChart with the wanted data */}
      <BarChart
        width={1330}
        height={260}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="city" />
        <YAxis dataKey="totalAmount" />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="totalAmount"
          name="By"
          fill="#eb6707"
          stroke="#000000"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ClientCity;
