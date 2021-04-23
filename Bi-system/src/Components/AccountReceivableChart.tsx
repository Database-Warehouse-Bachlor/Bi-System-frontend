import axios from 'axios';
import React, { PureComponent, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import AuthenticationService from '../Services/AuthenticationService';

// Sets the names of all the months
var monthsName = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG","SEP","OCT","NOV","DEC"];
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

export default class Example extends PureComponent {
    state = {
      opacity: {
        '1-30': 1,
        '30-60': 1,
        '60-90': 1,
        'Over 90': 1,
      },
    };
  

render() {
    const { opacity } = this.state;

    return (
      <div>
       <ResponsiveContainer width="99%" height= {300}>
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
          <XAxis dataKey="name" type="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="1-30"  fill="#000080" stroke="#000080" activeDot={{ r: 10 }}/>
          <Line dataKey="30-60" fill="#FF8C00" stroke="#FF8C00" activeDot={{ r: 10 }}/>
          <Line dataKey="60-90" fill="#DC143C" stroke="#DC143C" activeDot={{ r: 10 }}/>
          <Line dataKey="Over 90"  fill="#228B22" stroke="#228B22" activeDot={{ r: 10 }}/>
        </LineChart>
        </ResponsiveContainer>
       
      </div>
    );
  }
}