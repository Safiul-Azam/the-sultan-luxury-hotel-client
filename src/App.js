import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import NoFound from './pages/Shared/NoFound';
import Navbar from './pages/Shared/Navbar';
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NoFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
