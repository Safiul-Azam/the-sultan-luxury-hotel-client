import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import {  XAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
const data = [
    {
        day: 'Sunday',
        booked: 400,
        date: 240,
        Total: 540,
    },
    {
        day: 'Monday',
        booked: 300,
        date: 139,
        Total: 221,
    },
    {
        day: 'Tuesday',
        booked: 200,
        date: 980,
        Total: 1029,
    },
    {
        day: 'Wednesday',
        booked: 278,
        date: 390,
        Total: 400,
    },
    {
        day: 'Thursday',
        booked: 189,
        date: 480,
        Total: 718,
    },
    {
        day: 'Friday',
        booked: 239,
        date: 380,
        Total: 250,
    },
    {
        day: 'Saturday',
        booked: 349,
        date: 430,
        Total: 310,
    },
];

const PieChart = () => {

    return (
        <div className='flex justify-between space-x-5'>
            <div className='w-1/2 rounded-xl bg-white mt-10'>
                <h2 className='text-xl font-extrabold ml-12 mt-6'>Pie Chart</h2>
                <div className='flex justify-evenly pt-7 pb-16'>
                    <div style={{ width: 130, height: 130 }}>
                        <CircularProgressbarWithChildren
                            value={35}
                            maxValue={100}
                            strokeWidth={20}
                            styles={buildStyles({
                                rotation: 1,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(213, 247, 231)`,
                                trailColor: '#0F9D58',
                                backgroundColor: '#3e98c7',
                            })}
                        >
                            <div style={{ marginTop: -5, textAlign: 'center' }}>
                                <strong className='text-xs'>{35}%</strong>
                            </div>
                        </CircularProgressbarWithChildren>
                        <h2 className='text-center mt-3'>Total User</h2>
                    </div>
                    <div style={{ width: 130, height: 130 }}>
                        <CircularProgressbarWithChildren
                            value={55}
                            maxValue={100}
                            strokeWidth={20}
                            styles={buildStyles({
                                rotation: 1,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(206, 220, 245)`,
                                trailColor: '#4285F4',
                                backgroundColor: '#3e98c7',
                            })}
                        >
                            <div style={{ marginTop: -5, textAlign: 'center' }}>
                                <strong className='text-xs'>{55}%</strong>
                            </div>
                        </CircularProgressbarWithChildren>
                        <h2 className='text-center mt-3'>Total Booked</h2>
                    </div>
                    <div style={{ width: 130, height: 130 }}>
                        <CircularProgressbarWithChildren
                            value={85}
                            maxValue={100}
                            strokeWidth={20}
                            styles={buildStyles({
                                rotation: 1,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(250, 241, 215)`,
                                trailColor: '#F4B400',
                                backgroundColor: '#3e98c7',
                            })}
                        >
                            <div style={{ marginTop: -5, textAlign: 'center' }}>
                                <strong className='text-xs'>{85}%</strong>
                            </div>
                        </CircularProgressbarWithChildren>
                        <h2 className='text-center mt-3'>Total Revenue</h2>
                    </div>
                </div>
            </div>
            <div className='w-1/2 rounded-xl bg-white mt-10 p-5' >
                <ResponsiveContainer width="100%" height="100%" className='border'>
                    <LineChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 10,
                            bottom: 10,
                        }}
                    >
                        <XAxis dataKey="day" />
                        <Tooltip />
                        <Line type="monotone" dataKey="Total" stroke="#4285F4" fill="#4285F4" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PieChart;