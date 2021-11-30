import React from 'react';
import image1 from "../detailImg/Screenshot_18.png"
import image2 from "../detailImg/Screenshot_19.png"
import image3 from "../detailImg/Screenshot_20.png"
import { Link } from 'react-router-dom';
const Onion = () => {
    return (
        <div>
             <Link to="/"> <i className="fas fa-home text-black"> Home</i></Link>
      
            <h1 className="text-center fw-bolder pt-5"> Well come to  My project </h1>
            <p className="text-center py-5">This is my Food blog project it's about  three meals in a day</p>
            <div class="row row-cols-1 row-cols-md-2 g-4 container mx-auto">
  <div class="col">
    <div class="card">
      <img src={image3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h4 class="card-title fw-bolder">Log in form with redirect</h4>
        <h5>Element & technology are uses :  </h5>
        <ul>
            <li>Sign in with google</li>
            <li>sign in with email and password</li>
            <li>othRedirects</li>
            <li>firebase</li>
            <li>privet route</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={image1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h4 class="card-title fw-bolder">All day meals are here</h4>
      <h5>Element & technology are uses : </h5>
      <ul> 
          <li>order button</li>
          <li>react js</li>
          <li>fake data</li>
      </ul>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={image2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Lunch meal</h5>
        <h5>Element & technology are uses : </h5>
        <ul>
            <li>link each meal </li>
            <li>use responsive bootstrap</li>
        </ul>
      </div>
    </div></div>
    
  
 
  
</div>
<h1 className="text-center fw-bolder py-5">Project Summary </h1>
<hr />
  <div className="row row-cols-lg-2 row-cols-1 container mx-auto w-75 ">
      <div>
      <h4>Techonology are use :</h4>
   <ul>
       <li>html inside comopnent</li>
       <li>css</li>
       <li>bootstrap</li>
       <li>react js</li>
       <li>privet route</li>
       <li>firebase</li>
    
   </ul>
      </div>
      <div>
          <h4>Tools are used here :</h4>
          <ul>
              <li>Vs code </li>
              <li>git /gitHub</li>
              <li>netlify</li>
          </ul>
      </div>
  </div>
   <br />
 

        </div>
    );
};

export default Onion;