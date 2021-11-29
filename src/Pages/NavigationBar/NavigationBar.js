import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';
const NavigationBar = () => {
    return (
        <div className="">
    
<nav style={{backgroundColor:"#DAD8D9"}} className="navbar navbar-expand-lg navbar-light  fixed-top">
   
  
   <div className="container-fluid">
      <img src="https://mir-s3-cdn-cf.behance.net/projects/404/eede66117998121.Y3JvcCwxMTExLDg2OSw0MDQsMTA0.jpg" alt="hit"  style={{width:"80px",paddingRight:"30px"}}/>
  <h5 className="pe-5 fw-bolder">ARIFUL</h5> 
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
    <div className="collapse navbar-collapse fw-bolder" id="navbarNav">
   
      <ul className="navbar-nav nav justify-content-end ">
      <li className="nav-item px-4">
          <Link smooth className="nav-link active" aria-current="page" to="#homeChield">HOME</Link>
        </li>
        <li className="nav-item px-4">
          <Link smooth className="nav-link active" aria-current="page" to="#about">ABOUT US</Link>
        </li>
        <li className="nav-item px-4">
          <Link smooth className="nav-link active" aria-current="page" to="#service">SERVICE</Link>
        </li>
        <li className="nav-item px-4">
          <Link className="nav-link active" aria-current="page" to="#experience">EXPERIENCE</Link>
        </li>
        <li className="nav-item px-4">
          <Link className="nav-link active" aria-current="page" to="#portfolio">PORTFOLIO</Link>
        </li>
        {/* <li className="nav-item px-4">
          <Link className="nav-link active" aria-current="page" to="#blog">BLOG</Link>
        </li> */}
        <li className="nav-item px-4">
          <Link className="nav-link active" aria-current="page" to="#contact">CONTACT</Link>
        </li>
        <li className="nav-item px-4">
          <Link className="nav-link active" aria-current="page" to="/resume">RESUME</Link>
        </li>
        
      </ul>
      {/* <div  className="justify-content-end  ">  <a href="https://drive.google.com/file/d/152NPP1VCHnMFWwr4KJUgQdbHmCHmFKn6/view?usp=sharing"  ><button type="button" className="btn btn-secondary  ">Resume</button></a>
</div> */}
    </div>
  
  </div>
  
</nav>

        </div>
    );
};

export default NavigationBar;