import React, { PureComponent } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];
const renderCustomizedLabel = ({
}) => {
  return (
    <text x={100} y={85} fill="black" textAnchor="end" dominantBaseline="central">
      {"name"}
    </text>
  );
};
export default class Example extends PureComponent {


  render() {
    return (
      <PieChart width={390} height={280}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          labelLine={false}
          label={renderCustomizedLabel}
          cx={200}
          cy={150}
          outerRadius={80}
          fill="#8884d8"
         
        />
        <Pie  dataKey="value" data={data02} cx={200} cy={150} innerRadius={50} outerRadius={70} fill="#82ca9d" />
        <Tooltip />
      </PieChart>
    );
  }
}
