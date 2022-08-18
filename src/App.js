import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import NoFound from './pages/Shared/NoFound';
import CheckForm from './pages/Home/CheckForm';
import Footer from './pages/Home/Footer';
import CopyRight from './pages/Shared/CopyRight';
import About from './pages/About/About';
import Restaurant from './pages/Restaurant/Restaurant';
import Spa from './pages/Spa/Spa';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/spa" element={<Spa />} />
        <Route path='*' element={<NoFound />} />
      </Routes>
      <CheckForm></CheckForm>
      <Footer></Footer>
      <CopyRight></CopyRight>
    </div>
  );
}

export default App;
