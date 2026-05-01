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
import { useLocation } from 'react-router-dom';
export function TopBarChart() {
  const location = useLocation();
  const path = location.pathname;
  
  // Hide chart on home page, only show on /view-more/* routes
  if (path === '/') {
    return null;
  }
  
  const homeData = [
  {
    name: 'LB',
    value: 1100
  },
  {
    name: 'MB',
    value: 950
  },
  {
    name: 'GB',
    value: 1150
  },
  {
    name: 'SME',
    value: 800
  }];

  const companiesData = [
  {
    name: 'Companies',
    value: 1150
  },
  {
    name: 'User Admin',
    value: 1150
  },
  {
    name: 'User',
    value: 800
  },
  {
    name: 'User IT',
    value: 450
  },
  {
    name: 'Billing',
    value: 100
  }];

  const data = path === '/view-more/companies' ? companiesData : homeData;
  return (
    <div className="bg-white rounded-xl border border-blue-200 p-4 shadow-sm h-48 w-full max-w-md">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 0
          }}>
          
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb" />
          
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 10,
              fill: '#4b5563'
            }}
            dy={10} />
          
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 10,
              fill: '#4b5563'
            }}
            dx={-10} />
          
          <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={32}>
            {data.map((entry, index) =>
            <Cell key={`cell-${index}`} fill="#3b82f6" />
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>);

}