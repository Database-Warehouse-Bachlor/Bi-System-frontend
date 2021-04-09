import axios from 'axios';
import React, { PureComponent, useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

var currentMonth: string[] = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember","Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember" ];
var month = new Date();  
var crrentMonth = currentMonth[month.getMonth()+1]; 
var secoundMonth = currentMonth[month.getMonth()+2];  
var thirdMonth = currentMonth[month.getMonth()+3];  
var forthMonth = currentMonth[month.getMonth()+4];  
var fifthMonth = currentMonth[month.getMonth()+5];  
var sixthMonth = currentMonth[month.getMonth()+6];  
var seventhMonth = currentMonth[month.getMonth()+7];  
var eigthMonth = currentMonth[month.getMonth()+8];  
var ninethMonth = currentMonth[month.getMonth()+9];  
var tenthMonth = currentMonth[month.getMonth()+10];  
var eleventhMonth = currentMonth[month.getMonth()+11];  
var twelvthMonth = currentMonth[month.getMonth()+12];  

const Abcense = () => {
  const [chartData, setChartData] = useState({});
  const [yeayr, setYear] = useState([]);
  const [monthName, setMonthName] = useState([]);
  const [absenceCount, setAbsenceCount] = useState([]);

  const chart = () => {
    const Year: number[] = [];
    const Month: string[] = [];
    const AbcenseCount: string[] = [];
    axios
      .get("api.mocki.io/v1/262c6789")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data.data) {
          Year.push(parseInt(dataObj.year));
          Month.push(dataObj.mon);
          AbcenseCount.push(dataObj.employee_age);
        }
        setChartData({
          labels: Month,
          datasets: [
            label: "absence",
            data: AbcenseCount,
            backgroundColor: ["rgba(75, 192, 192, 0.6)"],

          ]
        })
      })
      .catch(err => {
        console.log(err);
      });
    console.log(empAbcenseCount, empMonth, empYear);
  };
    
    

const data = [
  {
    name: crrentMonth,
    Out: 4000,
    In: 2400,
    amt: 2400,
  },
  {
    name: secoundMonth,
    Out: 3000,
    In: 1398,
    amt: 2210,
  },
  {
    name: thirdMonth,
    Out: 2000,
    In: 9800,
    amt: 2290,
  },
  {
    name: forthMonth,
    Out: 2780,
    In: 3908,
    amt: 2000,
  },
  {
    name: fifthMonth,
    Out: 1890,
    In: 4800,
    amt: 2181,
  },
  {
    name: sixthMonth,
    Out: 2390,
    In: 3800,
    amt: 2500,
  },
  {
    name: seventhMonth,
    Out: 3490,
    pv: 4300,
    In: 2100,
  },
  {
    name: eigthMonth,
    Out: 3490,
    pv: 4300,
    In: 2100,
  },
  {
    name: ninethMonth,
    Out: 3490,
    pv: 4300,
    In: 2100,
  },
  {
    name: tenthMonth,
    Out: 3490,
    pv: 4300,
    In: 2100,
  },
  {
    name: eleventhMonth,
    Out: 3490,
    pv: 4300,
    In: 2100,
  },
  {
    name: twelvthMonth,
    Out: 3490,
    pv: 4300,
    In: 2100,
  },
];



useEffect(() => {
  chart();
}, []);
    <BarChart
    width={390}
    height={480}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="In" fill="#8884d8" />
    <Bar dataKey="Out" fill="#82ca9d" />
  </BarChart>
   
    
}

export default Abcense;