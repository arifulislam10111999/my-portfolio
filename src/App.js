import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import NavigationBar from './Pages/NavigationBar/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Resumes from "./Pages/Resums/Resumes";
import Footer from "./Pages/Footer/Footer";
import Blog from "./Pages/Blog/Blog";
import Cars from "./Pages/Cars/Cars";
import Park from "./Pages/Park/Park";
import Helth from "./Pages/Helth/Helth";
import Onion from "./Pages/Onion/Onion";


function App() {
  return (
    <BrowserRouter>
   
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resumes />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/park" element={<Park />} />
      <Route path="/health" element={<Helth />} />
      <Route path="/onion" element={<Onion />} />
      

    
  
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
