import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
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

const renderCustomizedLabel = ({
 
}) => {
  return (
    <text x={1} y={1} fill="black" textAnchor="end" dominantBaseline="central">
      {"Accounts receivable"}
    </text>
  );
};
const data = [
  
  {
    name: crrentMonth,
    '1-30': 4000,
    '30-60': 2400,
    '60-90': 2400,
    'Over 90': 2100,
  },
  {
    name: secoundMonth,
    '1-30': 3000,
    '30-60': 1398,
    '60-90': 2210,
    'Over 90': 3600,
  },
  {
    name: thirdMonth,
    '1-30': 2000,
    '30-60': 9800,
    '60-90': 2290,
    'Over 90': 1123,
  },
  {
    name: forthMonth,
    '1-30': 2780,
    '30-60': 3908,
    '60-90': 2000,
    'Over 90': 6123,
  },
  {
    name: fifthMonth,
    '1-30': 1890,
    '30-60': 4800,
    '60-90': 2181,
    'Over 90': 7123,
  },
  {
    name: sixthMonth,
    '1-30': 2390,
    '30-60': 3800,
    '60-90': 2500,
    'Over 90': 3023,
  },
  {
    name: seventhMonth,
    '1-30': 3490,
    '30-60': 4300,
    '60-90': 2100,
    'Over 90': 3123,
  },
  {
    name: eigthMonth,
    '1-30': 2780,
    '30-60': 3908,
    '60-90': 2000,
    'Over 90': 6123,
  },
  {
    name: ninethMonth,
    '1-30': 3490,
    '30-60': 4300,
    '60-90': 2100,
    'Over 90': 3123,
  },
  {
    name: tenthMonth,
    '1-30': 1890,
    '30-60': 4800,
    '60-90': 2181,
    'Over 90': 7123,
  },
  {
    name: eleventhMonth,
    '1-30': 3490,
    '30-60': 4300,
    '60-90': 2100,
    'Over 90': 3123,
  },
  {
    name: twelvthMonth,
    '1-30': 2780,
    '30-60': 3908,
    '60-90': 2000,
    'Over 90': 6123,
  },
];

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
          data={data}
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
          <Line dataKey="1-30"  stroke="#000080" activeDot={{ r: 10 }} />
          <Line dataKey="30-60" stroke="#FF8C00" activeDot={{ r: 10 }}/>
          <Line dataKey="60-90" stroke="#DC143C" activeDot={{ r: 10 }}/>
          <Line type= "number" dataKey="Over 90"  stroke="#228B22" activeDot={{ r: 10 }}/>
        </LineChart>
        </ResponsiveContainer>
       
      </div>
    );
  }
}
