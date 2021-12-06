import React from 'react';

const Footer = () => {
    return (
        <div style={{backgroundColor:"#007ACC"}}>
         <div className="text-white row py-5 container mx-auto ">
         <div className="col-lg-6">
             <p>Portfolio website </p>
             <p>we are work for client who needed website for his business or organization </p>
         </div>
         <div className="col-lg-6">
            <h1>connect with  us</h1>
              <a href=""></a>
            
          
            <a href="https://www.linkedin.com/in/ariful-islam-bb1921207/"><i class="fab fa-linkedin text-white"> linkedin</i></a>
            <a href="https://www.facebook.com/profile.php?id=100025248092230">  <i className="fab fa-facebook px-2 text-white"> Facebook</i></a>
            <a href="https://www.instagram.com/?hl=en"> <i className="fab fa-instagram-square text-white"> Instagram</i></a>
           
         </div>
         </div>
         <h6 className="text-center text-white py-2">Don't <i className="far fa-copyright"></i> copy our product</h6>
        </div>
    );
};

export default Footer;