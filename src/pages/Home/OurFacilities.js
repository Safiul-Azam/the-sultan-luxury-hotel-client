import useFetch from '../../hooks/useFetch';
import Spinner from '../Shared/Spinner';

const OurFacilities = () => {
    const {data, loading} = useFetch('https://sultan-hotel-1.onrender.com/api/facilities')
    if(loading){
     return <Spinner/>
    }
    return (
        <div className='container mx-auto lg:py-24 py-12 px-4'>
            <p style={{ letterSpacing: '5px' }} className='lg:text-lg text-sm uppercase mb-4 tracking-[3px] lg:tracking-[5px]'>OUR SERVICES</p>
            <h2 className='lg:text-5xl text-3xl mb-7'>Hotel Facilities</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    data.map(service => <div key={service._id} className='border p-6 hover:duration-500 hover:ease-out ease-in-out duration-500 hover:shadow-xl'>
                    <img className='mb-2' src={service.photo} alt="" />
                    <h2 className='text-xl mb-2'>{service.title}</h2>
                    <p className='text-lg tracking-normal text-[#777]'>{service.description}</p>
                </div>)
                }
            </div>
        </div>
    );
};

export default OurFacilities;