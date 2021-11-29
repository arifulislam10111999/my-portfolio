import React from 'react';
import imag from '../image/with out background.png'
import back from '../shapes/Group 8447.png'
const HomeChild = () => {
    return (
        <div id="homeChield" className="pt-5 container-fluid" style={{backgroundColor:"#DAD8D9"}}>
            
           <div className="row row-cols-lg-2 row-cols-1 pt-5 mx-auto text-center">
               <div style={{marginTop:"100px"}} className="p-5">
                   <h4>Web Developer</h4>
                   <h1 className="py-2">Md: Ariful Islam</h1>
                   <p>I am junior web developer. </p>
                   <button type="button" className="btn btn-success">View more</button>
                   </div>
               <div style={{backgroundImage: `url(${back})`}}>
                   <img style={{width:"300px",borderRadius:"50%",border:"1px"}} src={imag} alt="" />
                   <img src={{back}} alt="" />
               </div>
           </div>
        </div>
    );
};

export default HomeChild;