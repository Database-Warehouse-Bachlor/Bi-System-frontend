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

const AbcenseTest = () => {
  const [chartData, setChartData] = useState();

  const chart = () => {
    let year: number[] = [];
    let month: number[] = [];
    let absenceCount: number[] = [];

    var currentMonth: string[] = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember","Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember" ];
    var monthDate = new Date();  
    var crrentMonth = currentMonth[monthDate.getMonth()]; 
    
    axios
      .get("14275b1a-4650-4e59-bc0c-b3f7fa146bb0")
      .then((res) => {

        console.log(res.data.Absence);
        for (const dataObj of res.data.data) {
            let date: Date;
            date = dataObj.fromDate;
            /* 
                switch (+date.getMonth) {
                  case 1:
                    console.log(date.getMonth);
                   ;
            
                  case 2:
                    console.log(date.getMonth);
                    ;
            
                  case 3:
                    console.log(date.getMonth);

                    ;
                    case 4:
                    console.log(date.getMonth);
                   ;
                    case 5:
                    console.log(date.getMonth);
                  ;
                    case 6:
                    console.log(date.getMonth);
                   ;
                    case 7:
                    console.log(date.getMonth);
                   ;
                    case 8:
                    console.log(date.getMonth);
                   ;
                    case 9:
                    console.log(date.getMonth);
                    ;
                    case 10:
                    console.log(date.getMonth);
                   ;
                    case 11:
                    console.log(date.getMonth);
                   ;
                    case 12:
                    console.log(date.getMonth);
                   ;
            
                  default:
                    ;
                } */
            
            year.push(parseInt(dataObj.employee_salary));
            month.push(parseInt(dataObj.employee_age));
            absenceCount.push(parseInt(dataObj.employee_age));
          }
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
      <YAxis dataKey="duration" />
      <Tooltip />
      <Legend />
      <Line dataKey="duration"  fill="#000080" stroke="#000080" activeDot={{ r: 10 }} />
    </LineChart>
    </ResponsiveContainer>
  );
};

export default AbcenseTest;
