import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import NoFound from './pages/Shared/NoFound';
import CheckForm from './pages/Booking/CheckForm';
import Footer from './pages/Home/Footer';
import CopyRight from './pages/Shared/CopyRight';
import About from './pages/About/About';
import Restaurant from './pages/Restaurant/Restaurant';
import Spa from './pages/Spa/Spa';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Authentication/Login';
import Signup from './pages/Authentication/Signup';
import { ToastContainer } from 'react-toastify';
import RoomDetails from './pages/SingleRoom/RoomDetails';
import RequireAuth from './pages/Authentication/RequireAuth';
import FindRoomBanner from './pages/Booking/FindRoomBanner';
import FindSingleRoom from './pages/Booking/FindSingleRoom';
import ReviewRules from './pages/Booking/ReviewRules';
import Payment from './pages/Booking/Payment';
import Dashboard from '../src/pages/Dashboard/Dashboard'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/spa" element={<Spa />} />
        <Route path='/rooms/:roomId' element={<RoomDetails />}/>
        <Route path='/findRoom' element={<RequireAuth><FindRoomBanner /></RequireAuth>} />
        <Route path='/findRoom/:roomId' element={<RequireAuth><FindSingleRoom /></RequireAuth>} />
        <Route path='/reviewRules/:id' element={<RequireAuth><ReviewRules /></RequireAuth>} />
        <Route path='/payment/:id' element={<RequireAuth><Payment /></RequireAuth>} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard/>}>
            <Route index element={<Dashboard></Dashboard>}></Route>
        </Route>
        <Route path='*' element={<NoFound />} />
      </Routes>
      <ToastContainer align='center' />
      <Footer></Footer>
      <CopyRight></CopyRight>
    </div>
  );
}

export default App;
