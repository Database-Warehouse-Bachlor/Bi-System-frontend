
import axios from "axios";
import React, { PureComponent, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import AuthenticationService from "../../Services/AuthenticationService";

const AccRec = () => {
  // Sets the names of all the months
  var monthsName = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  //Stores the chart data as a state
  const [chartData, setChartData] = useState();

  const chart = () => {
    //Api call to the backend getting the information about Absence the last twelve months.
    //Authorizes using token stored in local storage.
    axios
      .get("web/accrec", {
        params: { filter: "thisYear" },
        headers: {
          Authorization:
            "bearer " + AuthenticationService.getCurrentUser("currentUser"),
        },
      })
      .then((res) => {
        //Alters the Json data to fit the chart in a specific way.
        var actualData = res.data;
        var ExpectedData = actualData.map((obj: any) => {

      /*     if (daysDue <= 30) {
            obj.group = "1-30";
          } else if (daysDue >= 31 && daysDue < 61) {
            obj.group = "30-61";
          } else if (daysDue >= 61 && daysDue <= 90) {
            obj.group = "61-90";
          } else if (daysDue > 90) {
            obj.group = "Over 90";
          } */
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
    <div>
      <ResponsiveContainer width="99%" height={300}>
        <LineChart
          width={1300}
          height={280}
          data={chartData}
          margin={{
            top: 5,
            right: 10,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month"  />
          <YAxis  
                   />
          <Tooltip />
          <Legend />
          <Line
            dataKey="thirtyAmount"
            fill="#000080"
            stroke="#000080"
            type="monotone"
            strokeWidth={2} 
            activeDot={{ r: 7 }}
          />
           <Line
            dataKey="sixtyAmount"
            fill="#FF8C00"
            stroke="#FF8C00"
            type="monotone"
            strokeWidth={2} 
            activeDot={{ r: 7 }}
          />
          <Line
            dataKey="ninetyAmount"
            fill="#DC143C"
            stroke="#DC143C"
            type="monotone"
            strokeWidth={2} 
            activeDot={{ r: 7 }}
          />
          <Line
            dataKey="ninetyPlusAmount"
            fill="#228B22"
            stroke="#228B22"
            strokeWidth={2} 
            type="monotone"
            activeDot={{ r: 7 }}
          /> 
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AccRec;