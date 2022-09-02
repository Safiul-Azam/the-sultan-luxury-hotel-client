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


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/spa" element={<Spa />} />
         <Route path='/rooms/:roomId' element={
          <RequireAuth>
            <RoomDetails />
          </RequireAuth>
        }></Route>
        <Route path='/findRoom' element={<FindRoomBanner/>}/>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='*' element={<NoFound />} />
      </Routes>
      <ToastContainer align='center' />
      <CheckForm></CheckForm>
      <Footer></Footer>
      <CopyRight></CopyRight>
    </div>
  );
}

export default App;
