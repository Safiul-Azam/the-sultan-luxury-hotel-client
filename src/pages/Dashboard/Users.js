import React from 'react';
import useFetch from '../../hooks/useFetch';

const Users = () => {
    const { data } = useFetch('http://localhost:5000/api/users')
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
                            <th>Join Date</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Rule</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(user => <tr>
                                <th>#{user?._id?.slice(0,7)}</th>
                                <th>{user.createdAt}</th>
                                <td className='capitalize'>{user.userName}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin === true ? 'Admin':'Customer'}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;