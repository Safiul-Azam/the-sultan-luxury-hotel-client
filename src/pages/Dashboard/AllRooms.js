import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { FaTrashAlt } from 'react-icons/fa'
import axios from 'axios';
import { toast } from 'react-toastify';
import { FiEdit } from 'react-icons/fi';

const AllRooms = () => {

    const { data, reFetch } = useFetch('https://sultan-hotel-1.onrender.com/api/rooms')
    const handleDelete = async (id) => {
        const res = await axios.delete(`http://localhost:5000/api/rooms/${id}`)
        if (res.status === 200) {
            reFetch()
            toast.error('Room is Deleted')
        }
    }

    return (
        <div className=''>
            <h4 className='text-2xl font-bold mt-10'>All Rooms</h4>
            <h4 className='text-lg mb-4'>Here is hotel's all rooms list</h4>
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
                            <th>Update</th>
                            <th>Delete</th>
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
                                <td>{room.createdAt.slice(0, 10)}</td>
                                <td>{room.title}</td>
                                <td className='capitalize'>{room.shift}</td>
                                <td>${room.price}</td>
                                <td>${room.extraBeds && 10}</td>
                                <td>{room?.roomNumbers[0]?.number}/{room?.roomNumbers[1]?.number}</td>
                                <td><Link to={`/dashboard/editRoom/${room._id}`}><FiEdit className='text-orange-500 cursor-pointer' /></Link></td>
                                <td onClick={() => handleDelete(room._id)}><FaTrashAlt className='text-red-500 cursor-pointer' /></td>
                                <td><Link to={`/rooms/${room._id}`} className="flex items-center text-[#3e98c7]">Details<BiRightArrowAlt className='mt-1' /></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllRooms;