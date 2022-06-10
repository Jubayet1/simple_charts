import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashChart = () => {
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
              <LineChart
                width={500}
                height={300}
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
                <Line type="monotone" dataKey="profit" stroke="#8884d8" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="sale" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
              </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DashChart;

// import React, { PureComponent } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/dashed-line-chart-dxwzg';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
//           <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
//         </LineChart>
//       </ResponsiveContainer>
//     );
//   }
// }
