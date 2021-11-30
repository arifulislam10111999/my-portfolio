import React from 'react';
import imag from '../image/with out background.png'
import back from '../shapes/Group 8447.png'
const HomeChild = () => {
    return (
        <div id="homeChield" className="pt-1 container-fluid" style={{backgroundColor:"#DAD8D9"}}>
            
           <div className="row row-cols-lg-2 row-cols-1 pt-3 mx-auto text-center">
               <div style={{marginTop:"100px"}} className="p-5 col-lg-8">
                   <h4>Web Developer</h4>
                   <h1 style={{fontSize:"40px"}} className="py-2">Md: Ariful Islam</h1>
                   <p className="w-75 mx-auto text-black-50 fw-bold">I am junior web developer.I am ding my work with passion.That's why I can take it easily. Even if it is heard work. I really very  enjoy doing  my work because of it is not only my work but also my hobby.when the people get free times they doing and think abut different but i was thinking about modern technology and system , how they doing it . this thinkness given me a new world . I really happy to say that  . i am going to be a part of modern world by my work.    </p>
                   <button type="button" className="btn btn-success">View more</button>
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