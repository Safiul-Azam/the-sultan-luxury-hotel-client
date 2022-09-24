import useFetch from '../../hooks/useFetch';
import Spinner from '../Shared/Spinner';
import OurFacility from './OurFacility';

const OurFacilities = () => {
    const {data, loading} = useFetch('https://sultan-hotel-1.onrender.com/api/facilities')
    if(loading){
        return<Spinner></Spinner>
    }
    return (
        <div className='container mx-auto lg:py-24 py-12 px-4'>
            <p style={{ letterSpacing: '5px' }} className='lg:text-lg text-sm uppercase mb-4 tracking-[3px] lg:tracking-[5px]'>OUR SERVICES</p>
            <h2 className='lg:text-5xl text-3xl mb-7'>Hotel Facilities</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    data.map(service => <OurFacility
                    key={service._id}
                    service={service}
                    loading={loading}
                    ></OurFacility>)
                }
            </div>
        </div>
    );
};

export default OurFacilities;