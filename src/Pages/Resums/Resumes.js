import React from 'react';
import { Link } from 'react-router-dom';
import resu from "../resume/Mern stack developer _4.pdf"
const Resumes = () => {
    return (
        <div>
             <Link to="/"> <i className="fas fa-home text-black"> Home</i></Link>
      
       <div className="container py-5">
           
           <hr />
            <div className="row mx-auto">
           <div className="col-lg-8 ">
              <h1 style={{fontSize:"50px"}}>MD. Ariful Islam</h1>
              <p style={{fontSize:"30px"}}>Junior web Developer </p> 
           </div>
           <div className="col-lg-4 py-3">
               <a href={resu}>   <button type="button" className="btn btn-secondary"> RESUME PDF </button></a>
           
            <h4>arifulislam10111999@gmail.com</h4>
            <h4>(+880) 01748921815</h4>
            <a href="https://www.linkedin.com/in/ariful-islam-bb1921207/">   <button  className="LinkHover btn btn-success"  >Linkedin</button></a>
         <a href="https://github.com/arifulislam10111999"> <button  className="px-3 LinkHover btn btn-success">GitHub</button></a>
           
           </div>
        </div>
        <hr />
        <div>
            <p style={{fontSize:"40px"}}>SKILLS</p>
        </div>
        <hr />
        <hr />
        <div className="row">
            <div className="col-lg-3">
                <h4>Expert</h4>
              <ul>
                  <li style={{fontSize:"20px"}}>HTML</li>
                  <li style={{fontSize:"20px"}}>CSS</li>
                  <li style={{fontSize:"20px"}}>JAVASCRIPT</li>
                  <li style={{fontSize:"20px"}}>REACT JS</li>
                  <li style={{fontSize:"20px"}}>BOOTSTRAP</li>
                  <li style={{fontSize:"20px"}}>METRIAL UI</li>
                  <li style={{fontSize:"20px"}}>MONGO DB</li>
              </ul>
            </div>
            <div className="col-lg-3">
                <h4>Comfortable</h4>
            <ul>
                  <li style={{fontSize:"20px"}}>NODE JS</li>
                  <li style={{fontSize:"20px"}}>NETLIFY</li>
                  <li style={{fontSize:"20px"}}>FIREBASE</li>
                 
                
              </ul>
            </div>
            <div className="col-lg-3">
                <h4>Familiyer</h4>
            <ul>
                  <li style={{fontSize:"20px"}}>TYPESCRIPT</li>
                  <li style={{fontSize:"20px"}}>REDUX</li>
             
              </ul>
            </div>
            <div className="col-lg-3">
              <h4>Tools</h4>
            <ul>
                  <li style={{fontSize:"20px"}}>VS CODE </li>
                  <li style={{fontSize:"20px"}}>CORM DEV-TOOLS </li>
             
                  <li style={{fontSize:"20px"}}>GIT/GITHUB</li>
              </ul>
            </div>
            <h4 className="py-3">Objective</h4>
            <h5>Quality-focused and results-driven professional seeking a position as a web developer where I can use my skills to enhance the user experience.


</h5>
        </div>
        <hr />
        <div>
            <h3>Education</h3>
            <p>National university of Bangladesh </p>
            <p>BSC honur's (third semister)</p>

        </div>
       </div>
       </div>
    );
};

export default Resumes;