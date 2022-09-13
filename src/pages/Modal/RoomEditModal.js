import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FiEdit } from 'react-icons/fi';
import { AuthContext } from '../../context/AuthContext';

const RoomEditModal = ({ id }) => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <>
            <label htmlFor="room-edit-modal" className="modal-button"><FiEdit className='text-orange-500 cursor-pointer' /></label>

            <input type="checkbox" id="room-edit-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl relative pt-10">
                    <label htmlFor="room-edit-modal" className="btn btn-sm btn-circle absolute right-0 top-0">✕</label>
                    <form className='grid' onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("email")}
                            type="text" value={user.email || ''} readOnly className="input input-bordered w-full mb-3" />
                        <input
                            required
                            {...register("title")}
                            type="text" placeholder='Room Title' className="input input-bordered w-full mb-3" />
                        <textarea
                            required
                            {...register("description")}
                            type="text" cols='30' rows='10' placeholder='Product Description' className="input input-bordered w-full mb-3"></textarea>
                        <input
                            {...register("minQuantity")}
                            type="number"
                            required
                            placeholder='Minimum Quantity'
                            className="input input-bordered w-full mb-3" />
                        <input
                            {...register("maxQuantity")}
                            type="number"
                            required
                            placeholder='Available Quantity'
                            className="input input-bordered w-full mb-3" />
                        <input
                            {...register("perPrice")}
                            required
                            type="number" placeholder="Per Price" className="input input-bordered w-full mb-3" />
                        <input
                            {...register("img")}
                            required
                            type="file" placeholder="Your Image" className="w-full mb-3" />
                        <input className='btn btn-secondary w-full' type="submit" value='submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default RoomEditModal;