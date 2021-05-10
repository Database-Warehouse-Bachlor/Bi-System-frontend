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
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";



const Abcense = () => {

  // Sets the names of all the months
  var monthsName = [  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
  //Stores the chart data as a state
  const [chartData, setChartData] = useState();

  const chart = () => {
    

    //Api call to the backend getting the information about Absence the last twelve months.
    //Authorizes using token stored in local storage.
    axios
      .get("web/absence", {
        params: { filter: "lastTwelveMonths" },
        headers: {
          Authorization:
            "bearer " + AuthenticationService.getCurrentUser("currentUser"),
        },
      })
      .then((res) => {
    //Alters the Json data to fit the chart in a specific way.
        var actualData = res.data
        var ExpectedData = actualData.map((obj: any) => {
            // Get month number from date-string and then substract 1
            var monthNum = parseInt(obj.month) - 1;
            // Get month name from the array and adds years.
            obj.month = monthsName[monthNum] + " " + obj.year;
            
            // Return the object
            return obj;
          });
  
        setChartData(ExpectedData);
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
    <ResponsiveContainer width="99%" height={300}>
    {/* Generates a BarChart with the wanted data */}
      <BarChart
        width={1330}
        height={280}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis dataKey="totalDuration" />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="totalDuration"
          fill="#8884d8" stroke="#000080"
          
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Abcense;
