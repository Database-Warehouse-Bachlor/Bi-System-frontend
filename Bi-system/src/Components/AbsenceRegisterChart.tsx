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

var currentMonth: string[] = [
  "Januar",
  "Februar",
  "Mars",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Desember",
  "Januar",
  "Februar",
  "Mars",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Desember",
];
var month = new Date();
var crrentMonth = currentMonth[month.getMonth() + 1];
var secoundMonth = currentMonth[month.getMonth() + 2];
var thirdMonth = currentMonth[month.getMonth() + 3];
var forthMonth = currentMonth[month.getMonth() + 4];
var fifthMonth = currentMonth[month.getMonth() + 5];
var sixthMonth = currentMonth[month.getMonth() + 6];
var seventhMonth = currentMonth[month.getMonth() + 7];
var eigthMonth = currentMonth[month.getMonth() + 8];
var ninethMonth = currentMonth[month.getMonth() + 9];
var tenthMonth = currentMonth[month.getMonth() + 10];
var eleventhMonth = currentMonth[month.getMonth() + 11];
var twelvthMonth = currentMonth[month.getMonth() + 12];

const Abcense = () => {
  const [chartData, setChartData] = useState();

  const chart = () => {
    let year: number[] = [];
    let month: string[] = [];
    let absenceCount: string[] = [];

    axios
      .get("262c6789")
      .then((res) => {
        setChartData(res.data.Absence);
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
    <LineChart
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
      <XAxis dataKey="monthName" />
      <YAxis dataKey="absenceCount" />
      <Tooltip />
      <Legend />
      <Line type= "" dataKey="absenceCount"  fill="#8884d8" stroke="#000080" activeDot={{ r: 10 }} />
    </LineChart>
    </ResponsiveContainer>
  );
};

export default Abcense;
