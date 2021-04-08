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


    const [dataFetch, setData] = useState([]);
    useEffect(() => {
      fetchData();
    }, [])
    const fetchData = () => {
      fetch(`api.mocki.io/v1/262c6789`)
        .then(response => response.json())
        .then(json => setData(json))
    }

    

    

console.log(dataFetch)
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

export default class Example extends PureComponent {

  render() {
    console.log(dataFetch)
    return (
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
    );
  }
}

export {}