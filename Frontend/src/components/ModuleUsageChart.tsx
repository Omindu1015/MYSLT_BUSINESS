import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell } from
'recharts';
export function ModuleUsageChart() {
  const data = [
  {
    name: 'Service Lineup',
    value: 1100
  },
  {
    name: 'Intelligent Solutions',
    value: 950
  },
  {
    name: 'Complaints',
    value: 1200
  },
  {
    name: 'Status Tracker',
    value: 800
  },
  {
    name: 'Billing',
    value: 1100
  },
  {
    name: 'Service Request',
    value: 700
  },
  {
    name: 'Messages',
    value: 1000
  },
  {
    name: 'Settings',
    value: 1100
  }];

  // Custom tick to split long labels into two lines
  const CustomizedAxisTick = (props: any) => {
    const { x, y, payload } = props;
    const words = payload.value.split(' ');
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="middle"
          fill="#4b5563"
          fontSize={10}>
          
          {words[0]}
        </text>
        {words[1] &&
        <text
          x={0}
          y={0}
          dy={28}
          textAnchor="middle"
          fill="#4b5563"
          fontSize={10}>
          
            {words[1]}
          </text>
        }
      </g>);

  };
  return (
    <div className="bg-white rounded-xl border border-blue-200 p-4 shadow-sm h-80 flex flex-col">
      <h3 className="text-sm font-bold text-gray-800 mb-4">Module Usage</h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 20
            }}>
            
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb" />
            
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={<CustomizedAxisTick />} />
            
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 10,
                fill: '#4b5563'
              }}
              dx={-10} />
            
            <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={36}>
              {data.map((entry, index) =>
              <Cell key={`cell-${index}`} fill="#3b82f6" />
              )}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>);

}