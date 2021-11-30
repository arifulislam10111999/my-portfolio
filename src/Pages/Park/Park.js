import React from 'react';
import image1 from '../detailImg/Screenshot_9.png'
import image2 from '../detailImg/Screenshot_10.png'
import image3 from '../detailImg/Screenshot_11.png'
import image4 from '../detailImg/Screenshot_12.png'
import { Link } from 'react-router-dom';
const Park = () => {
    return (
        <div>
            <Link to="/"> <i className="fas fa-home text-black"> Home</i></Link>
      
            <h1 className="text-center fw-bolder py-5">This is our theme  park detail area </h1>
            <p className="text-center w-50 mx-auto pb-5">It's about the picnic sport  and also theme park . it is most popular pleace in our country every year lots of people are go there visit the park and riding the park ride </p>

            <div class="row row-cols-1 row-cols-md-2 g-4 container mx-auto">
  <div class="col">
    <div class="card">
      <img src={image4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Our combo package area</h5>
        <h6>user experience </h6> <hr />
        <ul>
            <li>user can buy ticket</li>
            <li>it is redirect page</li>
            <li>user explore there by sign in</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={image2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Ride area</h5>
        <h6> user experience</h6> <hr />
        <ul>
            <li>user can buy it here</li>
            <li>all ride detail here</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={image3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Add new service</h5>
        <h6>Admin panel </h6> <hr />
        <ul>
            <li>only admin can add service </li>
            <li>he can delete service </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={image1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Log in area</h5>
         <h6>user experience </h6> <hr />
         <ul>
             <li>if user want by some thing they need to sign up</li>
             <li>user can sign in with google </li>

         </ul>
      </div>
    </div>
  </div>
</div>
     <h3 className="text-center py-5"> Summary of projects technology and tools</h3>
     <hr />
     <div className="row row-cols-lg-2 row-cols-1 container w-75 mx-auto">
        <div>
            <h4>Technology</h4>
            <ul>
                <li>React</li>
                <li>mongodb</li>
                <li>express</li>
                <li>node js</li>
                <li>bootstrap</li>
                <li>firebase</li>
                <li>css</li>
                <li>html</li>
            </ul>
        </div>
        <div>
            <h4>Tools</h4>
            <ul>
                <li>Vs code</li>
                <li>git /gitHub</li>
                <li>heroku</li>

            </ul>
        </div>
     </div>


        </div>
    );
};

export default Park;