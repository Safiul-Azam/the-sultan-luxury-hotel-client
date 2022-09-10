import Navbar from '../Shared/Navbar';
import photo from '../../images/banner/6.jpg'
import FindingRoom from './FindingRoom';

const FindRoomBanner = () => {
    return (
        <>
            <div className=' pt-8 mix-blend-normal bg-black-400' style={
                {
                    background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${photo})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover'
                }
            }>
                <Navbar></Navbar>


                <div className='text-left text-white  lg:w-[1150px] py-32 mx-auto'>
                    <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-6'>LUXURY HOTEL</p>
                    <h2 style={{ lineHeight: '30px' }} className='text-6xl'>Finding Room</h2>
                </div>
            </div>
            <FindingRoom/>
            
        </>
    );
};

export default FindRoomBanner;