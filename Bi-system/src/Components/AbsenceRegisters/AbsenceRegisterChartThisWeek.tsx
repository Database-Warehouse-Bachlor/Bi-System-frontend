import axios from "axios";
import React, { PureComponent, useState, useEffect } from "react";
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
import AuthenticationService from "../../Services/AuthenticationService";


const renderCustomizedLabel = ({
}) => {
  return (
    <text x={100} y={35} fill="black" textAnchor="end" dominantBaseline="central">
      {"name"}
    </text>
  );
};

const AbcenseWeekly = () => {
  const [chartData, setChartData] = useState();
  
  var monthsName = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG","SEP","OCT","NOV","DEC"];

  const chart = () => {
    let year: number[] = [];
    let month: string[] = [];
    let absenceCount: string[] = [];


   
    axios({
      method: "get",
      url: "web/absence",
      params: {
        filter: "thisWeek"
      },
      headers: {
        "Content-Type": "multipart/form-data" ,     
        Authorization:
          "bearer " + AuthenticationService.getCurrentUser("currentUser"),
           }
    })

    .then((res) => {
      var actualData = res.data
 
      var ExpectedData = actualData.map((obj: any) => {

          // Get month number from date-string and then substract 1
          var monthNum = parseInt(obj.month) - 1;
          // Get month name from the array and adds years and weekday.
          obj.month = monthsName[monthNum] + " " + obj.day + " " + obj.weekDay;
          // Return the object
          console.log(obj);
          return obj;
        });
      console.log(ExpectedData);
      
      setChartData(ExpectedData);

      console.log(chartData);
    })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);
  
  return (
    <ResponsiveContainer width="99%" height= {300}>
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
      <Bar dataKey="totalDuration"  fill="#000080" stroke="#000080"  />
    </BarChart>
    </ResponsiveContainer>
  );
};

export default AbcenseWeekly;
