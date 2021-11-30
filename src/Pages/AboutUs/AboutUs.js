import React from 'react';
import arif from '../image/port.png';
import background from '../shapes/7.png'
const AboutUs = () => {
   
    return (
        <div className="container-fluid" style={{ backgroundImage: `url(${background})`,paddingTop:"40px" }}  id="about">
            <h1 className="text-center imageBack">About Us</h1>
         <div className="row row-cols-lg-2 row-cols-1 container">
             <div className="mx-auto text-center pb-5 col-lg-4">
                 <img style={{width:"100%",height:"auto",borderRadius:"50%",backgroundColor:"white",border:"1px  green",boxSizing:"border-box"}} src={arif} alt="my picter" />
                 <h3>Ariful Islam</h3>
                 <h6>MERN stack developer</h6>
               
             </div>
             <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure officiis, labore cupiditate porro possimus sapiente minus vel reprehenderit atque neque deserunt magnam facilis ut obcaecati necessitatibus, eaque eius! Quasi, asperiores?</p>
               
               <h3>Personal info</h3>

              <div className="row row-cols-lg-2 row-cols-1">
              <div>
              <h6>Name: Ariful Islam</h6>
               <h6>Age: 21</h6>
               <h6>Nationality: Bangladesh</h6>
               <h6>Freelance: Avialable</h6>
              </div>
              <div>
                  <h6>Address:Sirajgonj </h6>
                  <h6>Phone:+880 87297660</h6>
                  <h6>Email:arifulislam10111999@gmail.com</h6>
              </div>
              </div>
             </div>
         </div>
        </div>
    );
};

export default AboutUs;