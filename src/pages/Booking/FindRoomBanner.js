import Navbar from '../Shared/Navbar';
import photo from '../../images/banner/6.jpg'
import FindingRoom from './FindingRoom';

const FindRoomBanner = () => {
    return (
        <>
        <Navbar></Navbar>
            <div className=' pt-8 mix-blend-normal bg-black-400' style={
                {
                    background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${photo})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover'
                }
            }>
                <div className='text-left text-white container py-32 px-4 mx-auto'>
                    <p className='text-lg uppercase mb-6 tracking-[5px]'>LUXURY HOTEL</p>
                    <h2 className='lg:text-6xl text-4xl leading-3'>Finding Room</h2>
                </div>
            </div>
            <FindingRoom/>
        </>
    );
};

export default FindRoomBanner;