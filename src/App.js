import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import NoFound from './pages/Shared/NoFound';
import CheckForm from './pages/Home/CheckForm';
import Footer from './pages/Home/Footer';
import CopyRight from './pages/Shared/CopyRight';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NoFound />} />
      </Routes>
      <CheckForm></CheckForm>
      <Footer></Footer>
      <CopyRight></CopyRight>
    </div>
  );
}

export default App;
