import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AreareChart = () => {
    const data = [
        {
          name: 'January',
          sale: 4000,
          profit: 2400,
          amt: 2400,
        },
        {
          name: 'February',
          sale: 3000,
          profit: 1398,
          amt: 2210,
        },
        {
          name: 'March',
          sale: 2000,
          profit: 9800,
          amt: 2290,
        },
        {
          name: 'April',
          sale: 2780,
          profit: 3908,
          amt: 2000,
        },
        {
          name: 'June',
          sale: 1890,
          profit: 4800,
          amt: 2181,
        },
        {
          name: 'July',
          sale: 2390,
          profit: 3800,
          amt: 2500,
        },
        {
          name: 'August',
          sale: 3490,
          profit: 4300,
          amt: 2100,
        },
        {
          name: 'September',
          sale: 2000,
          profit: 9800,
          amt: 2290,
        },
        {
          name: 'October',
          sale: 3490,
          profit: 4300,
          amt: 2100,
        },
        {
          name: 'November',
          sale: 4000,
          profit: 2400,
          amt: 2400,
        },
        {
          name: 'December',
          sale: 1890,
          profit: 4800,
          amt: 2181,
        }
      ];
    return (
        <div className="mt-20">
            <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="profit" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="sale" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
    );
};

export default AreareChart;