import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
export function SubModuleUsage() {
  const data1 = [
  {
    name: 'Protocol Report',
    value: 49,
    color: '#4bc0c0'
  },
  {
    name: 'Purchase History',
    value: 20,
    color: '#ff6384'
  },
  {
    name: 'Usage',
    value: 9,
    color: '#ff9f40'
  },
  {
    name: 'Messages',
    value: 8,
    color: '#ffcd56'
  },
  {
    name: 'Data',
    value: 7,
    color: '#c9cbcf'
  },
  {
    name: 'Notifications',
    value: 6,
    color: '#36a2eb'
  }];

  const data2 = [
  {
    name: 'LB',
    value: 40,
    color: '#ff9f40'
  },
  {
    name: 'MB',
    value: 25,
    color: '#ff6384'
  },
  {
    name: 'SME',
    value: 20,
    color: '#ffcd56'
  },
  {
    name: 'GB',
    value: 15,
    color: '#4bc0c0'
  }];

  // Custom label for the first donut
  const renderCustomizedLabel1 = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    name
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={10}
        fontWeight="bold">
        
        {`${(percent * 100).toFixed(0)}%`}
      </text>);

  };
  // Outer labels for the first donut
  const renderOuterLabel1 = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    name
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 15;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="#4b5563"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={8}>
        
        {name}
      </text>);

  };
  // Custom label for the second donut
  const renderCustomizedLabel2 = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    name
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="#4b5563"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={10}
        fontWeight="bold">
        
        {name}
      </text>);

  };
  return (
    <div className="bg-white rounded-xl border border-blue-200 p-4 shadow-sm h-80 flex flex-col">
      <h3 className="text-sm font-bold text-gray-800 mb-2">Sub Module Usage</h3>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-1/2 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data1}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                labelLine={false}
                label={renderCustomizedLabel1}>
                
                {data1.map((entry, index) =>
                <Cell key={`cell-${index}`} fill={entry.color} />
                )}
              </Pie>
              <Pie
                data={data1}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                labelLine={false}
                label={renderOuterLabel1}
                fill="transparent"
                stroke="none" />
              
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-1/2 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data2}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                labelLine={false}
                label={renderCustomizedLabel2}>
                
                {data2.map((entry, index) =>
                <Cell key={`cell-${index}`} fill={entry.color} />
                )}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>);

}