import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Jan',
    Out: 4000,
    In: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    Out: 3000,
    In: 1398,
    amt: 2210,
  },
  {
    name: 'Mars',
    Out: 2000,
    In: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    Out: 2780,
    In: 3908,
    amt: 2000,
  },
  {
    name: 'Mai',
    Out: 1890,
    In: 4800,
    amt: 2181,
  },
  {
    name: 'Juni',
    Out: 2390,
    In: 3800,
    amt: 2500,
  },
  {
    name: 'Juli',
    Out: 3490,
    pv: 4300,
    In: 2100,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <BarChart
        width={390}
        height={280}
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