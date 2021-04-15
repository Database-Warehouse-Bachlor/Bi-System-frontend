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

  const chart = () => {
    let year: number[] = [];
    let month: string[] = [];
    let absenceCount: string[] = [];

    axios
      .get("fc10a167-d46e-40dc-89c9-e75572e8c508")
      .then((res) => {

        console.log(res.data.Absence);

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
      <XAxis dataKey="day" />
      <YAxis dataKey="duration" />
      <Tooltip />
      <Legend />
      <Line dataKey="duration"  fill="#8884d8" stroke="#000080" activeDot={{ r: 10 }} />
    </LineChart>
    </ResponsiveContainer>
  );
};

export default AbcenseWeekly;
