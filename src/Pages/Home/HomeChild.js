import React from 'react';
import imag from '../image/with out background.png'
import Read from '../Read/Read';
import back from '../shapes/Group 8447.png'
const HomeChild = () => {
    return (
        <div id="homeChield" className="pt-1 container-fluid" style={{backgroundColor:"#DAD8D9"}}>
            
           <div className="row row-cols-lg-2 row-cols-1 pt-3 mx-auto">
               <div className=" col-lg-8 p-5 padding-right-lg">
                   {/* <h4>Web Developer</h4> */}
                 
                   <h1 style={{fontSize:"5vw"}} className="py-2">Md: Ariful Islam</h1>
                   <p className=" mx-auto text-black-50 fw-bold">
                   <Read></Read>
                      
                       
                          </p>
                   
                   </div>
               <div style={{backgroundImage: `url(${back})`}} className="col-lg-4">
                   <img style={{width:"100%",height:"auto",borderRadius:"50%",border:"1px"}} src={imag} alt="" />
                   <img src={{back}} alt="" />
               </div>
           </div>
        </div>
    );
};

export default HomeChild;