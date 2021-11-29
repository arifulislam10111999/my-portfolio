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


function App() {
  return (
    <BrowserRouter>
   
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resumes />} />
      {/* <Route path="/" element={<Footer />} /> */}

    
  
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
