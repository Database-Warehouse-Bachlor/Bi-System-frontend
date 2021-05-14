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
    "Jan         ",
    "Feb         ",
    "Mar         ",
    "Apr         ",
    "Mai         ",
    "Jun         ",
    "Jul         ",
    "Aug         ",
    "Sep         ",
    "Okt         ",
    "Nov         ",
    "Des         ",
  ];
  //Stores the chart data as a state
  const [chartData, setChartData] = useState();

  const chart = () => {
    //Api call to the backend getting the information about Absence the last twelve months.
    //Authorizes using token stored in local storage.
    axios
      .get("web/accrec", {
        params: { filter: "lastThirtyDays" },
        headers: {
          Authorization:
            "bearer " + AuthenticationService.getCurrentUser("currentUser"),
        },
      })
      .then((res) => {
        //Alters the Json data to fit the chart in a specific way.
        var actualData = res.data;
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
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            dataKey="thirtyAmount"
            name="1-30 dager forsinket"
            stroke="#000080"
            type="monotone"
            activeDot={{ r: 10 }}
          />
          <Line
            dataKey="sixtyAmount"
            name="31-60 dager forsinket"
            stroke="#FF8C00"
            type="monotone"
            activeDot={{ r: 10 }}
          />

          <Line
            dataKey="ninetyAmount"
            name="61-90 dager forsinket"
            stroke="#DC143C"
            type="monotone"
            activeDot={{ r: 10 }}
          />
          <Line
            dataKey="ninetyPlusAmount"
            name="90 pluss dager forsinket"
            stroke="#228B22"
            type="monotone"
            activeDot={{ r: 10 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AccRec;
