import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const AllRooms = () => {
    const { data } = useFetch('https://sultan-hotel-1.onrender.com/api/rooms')
    console.log(data);
    return (
        <div className=''>
            <h4 className='text-2xl font-bold mt-10'>All Users</h4>
            <h4 className='text-lg mb-4'>Here is your all user list</h4>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Image</th>
                            <th>Add Date</th>
                            <th>Name</th>
                            <th>Shift</th>
                            <th>Price</th>
                            <th>Extra Beds</th>
                            <th>Room Number</th>
                            <th>unavailable Dates</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((room, index) => <tr key={room._id}>
                                <th>{index + 1}</th>
                                <td className='capitalize'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={room?.photos[0]} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{room.createdAt.slice(0,10)}</td>
                                <td>{room.title}</td>
                                <td className='capitalize'>{room.shift}</td>
                                <td>${room.price}</td>
                                <td>${room.extraBeds && 10}</td>
                                <td>{room?.roomNumbers[0]?.number}/{room?.roomNumbers[1]?.number}</td>
                                <td>
                                    
                                </td>
                                <td><Link to={`/rooms/${room._id}`} className="text-right flex items-center text-sm uppercase text-[#3e98c7] tracking-widest font-semibold">Details<BiRightArrowAlt className='mt-1'/></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllRooms;