import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
var currentMonth: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];
var month = new Date();  
var crrentMonth = currentMonth[month.getMonth()]; 
var secoundMonth = currentMonth[month.getMonth()+1];  
var thirdMonth = currentMonth[month.getMonth()+2];  
var forthMonth = currentMonth[month.getMonth()+3];  
var fifthMonth = currentMonth[month.getMonth()+4];  
var sixthMonth = currentMonth[month.getMonth()+5];  
var seventhMonth = currentMonth[month.getMonth()+6];  

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
          <Line type="monotone" dataKey="1-30" strokeOpacity={opacity['1-30']} stroke="#000080" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="30-60" strokeOpacity={opacity['30-60']} stroke="#FF8C00" />
          <Line type="monotone" dataKey="60-90" strokeOpacity={opacity['60-90']} stroke="#DC143C" />
          <Line type="monotone" dataKey="Over 90" strokeOpacity={opacity['Over 90']} stroke="#228B22" />
        </LineChart>
       
      </div>
    );
  }
}
