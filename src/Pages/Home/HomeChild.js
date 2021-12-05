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
                   <p className="w-75 mx-auto text-black-50 fw-bold">I am a junior web developer. I am very passionate that's why I can do things easily. Even if it is a  hard work, I really enjoy working because, I think it's not just all about work but at the same time doing my interest. When people have spare time, they do and think about different things. In my case, I always consider about modern technology and system. This thought has opened up a new world for me. I'm really glad to say that, I am going to be a part of the modern world because of my work.    </p>
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