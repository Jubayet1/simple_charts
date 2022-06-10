import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarReChart = () => {
    const data = [
        {
          name: 'January',
          sale: 4000,
          profit: 2400,
          lose: 2400,
        },
        {
          name: 'February',
          sale: 3000,
          profit: 1398,
          lose: 2210,
        },
        {
          name: 'March',
          sale: 2000,
          profit: 9800,
          lose: 2290,
        },
        {
          name: 'April',
          sale: 2780,
          profit: 3908,
          lose: 2000,
        },
        {
          name: 'June',
          sale: 1890,
          profit: 4800,
          lose: 2181,
        },
        {
          name: 'July',
          sale: 2390,
          profit: 3800,
          lose: 2500,
        },
        {
          name: 'August',
          sale: 3490,
          profit: 4300,
          lose: 2100,
        },
        {
          name: 'September',
          sale: 2000,
          profit: 9800,
          lose: 2290,
        },
        {
          name: 'October',
          sale: 3490,
          profit: 4300,
          lose: 2100,
        },
        {
          name: 'November',
          sale: 4000,
          profit: 2400,
          lose: 2400,
        },
        {
          name: 'December',
          sale: 1890,
          profit: 4800,
          lose: 2181,
        }
      ];
    return (
        <div className="mt-20">
            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                    top: 20,
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
                    <Bar dataKey="profit" stackId="a" fill="#8884d8" />
                    <Bar dataKey="lose" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="sale" fill="#ffc658" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarReChart;