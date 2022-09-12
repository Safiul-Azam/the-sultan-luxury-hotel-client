import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const data = [
    {
        month: 'Jan',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        month: 'Feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        month: 'Mar',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        month: 'Apr',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        month: 'May',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        month: 'Jun',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        month: 'Jul',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        month: 'Aug',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        month: 'Sep',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        month: 'Oct',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        month: 'Nav',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        month: 'Dec',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
const RevenueChart = () => {
    return (
        <div>
            <LineChart data={data}>
                <XAxis dataKey="month" />
                <YAxis type="number" domain={[0, 'dataMax + 100']} />
                <Tooltip />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>

        </div>
    );
};

export default RevenueChart;