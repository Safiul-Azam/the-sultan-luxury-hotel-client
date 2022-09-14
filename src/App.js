import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import NoFound from './pages/Shared/NoFound';
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
import Users from './pages/Dashboard/Users';
import Products from './pages/Dashboard/Products';
import BookedRoom from './pages/Dashboard/BookedRoom';
import DashboardHome from './pages/Dashboard/DashboardHome';
import AllRooms from './pages/Dashboard/AllRooms';
import AddRoom from './pages/Dashboard/AddRoom';
import RoomEdit from './pages/Home/RoomEdit';
import EditProfile from './pages/Dashboard/EditProfile';
import DashCustomLink from './pages/Dashboard/DashCustomLink';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/spa" element={<Spa />} />
        <Route path='/rooms/:roomId' element={<RoomDetails />} />
        <Route path='/findRoom' element={<RequireAuth><FindRoomBanner /></RequireAuth>} />
        <Route path='/findRoom/:roomId' element={<RequireAuth><FindSingleRoom /></RequireAuth>} />
        <Route path='/reviewRules/:id' element={<RequireAuth><ReviewRules /></RequireAuth>} />
        <Route path='/payment/:id' element={<RequireAuth><Payment /></RequireAuth>} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />}></Route>
          <Route path='users' element={<Users />}></Route>
          <Route path='link-dash' element={<DashCustomLink />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='addRoom' element={<AddRoom />}></Route>
          <Route path='bookedRooms' element={<BookedRoom />}></Route>
          <Route path='allRooms' element={<AllRooms />}></Route>
          <Route path='editProfile' element={<EditProfile />}></Route>
          <Route path='editRoom/:id' element={<RoomEdit />} />
        </Route>
        <Route path='*' element={<NoFound />} />
      </Routes>
      <ToastContainer align='center' />

    </div>
  );
}

export default App;
