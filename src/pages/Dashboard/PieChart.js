import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { XAxis, Tooltip, CartesianGrid, Area, AreaChart} from 'recharts';
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
                <h4 className='text-xl font-extrabold text-gray-600 ml-12 mt-6'>Pie Chart</h4>
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
                        <h4 className='text-center mt-3'>Total User</h4>
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
                        <h4 className='text-center mt-3'>Total Booked</h4>
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
                        <h4 className='text-center mt-3'>Total Revenue</h4>
                    </div>
                </div>
            </div>
            <div className='w-1/2 rounded-xl bg-white mt-10' >
            <h4 className='text-xl font-extrabold ml-12 mt-6 text-gray-600'>Chart Booked</h4>
            <p className='text-sm font-extrabold ml-12 text-gray-600'>Counts the booked room ratio per day</p>
                <AreaChart width={550} height={250} data={data}
                    margin={{ top: 10, right: 20, left: 30, bottom: 10 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="day" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>
        </div>
    );
};

export default PieChart;