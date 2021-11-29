import React from 'react';
import fanta from '../image/Screenshot_5.png';
import car from '../image/Screenshot_2.png';
import helth from '../image/Screenshot_4.png';
import onion from '../image/onion.png';

const Portfolio = () => {
    return (
        <div style={{backgroundColor:"black"}} id="portfolio" className="">
            <h1 className="text-center fw-bolder py-5 text-white">My Portfolio</h1>
            <div class="row row-cols-1 row-cols-md-2 g-4 container mx-auto w-75">
  <div class="col">
    <div class="card">
      <img src={car} class="card-img-top" alt="..."/>
      <div class="card-body">
     
         <a href="https://rolls-royce-car.web.app/"> <button type="button" class="btn btn-secondary"> live site</button></a> 
         <a href="https://github.com/arifulislam10111999/Automobile-car-shop-clientside"> <button type="button" class="btn btn-secondary mx-3">client site</button></a>
         <a href="https://github.com/arifulislam10111999/Automobile-car-serversite/blob/main/index.js"><button type="button" class="btn btn-secondary">server site</button> </a>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={fanta} class="card-img-top" alt="..."/>
      <div class="card-body">
      <a href="https://fantasy-tourism.web.app/"> <button type="button" class="btn btn-secondary"> live site</button></a> 
         <a href="https://github.com/arifulislam10111999/theme-park-client-site"> <button type="button" class="btn btn-secondary mx-3">client site</button></a>
         <a href="https://github.com/arifulislam10111999/theme-park-server-site/blob/main/index.js"><button type="button" class="btn btn-secondary">server site</button> </a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={helth} class="card-img-top" alt="..."/>
      <div class="card-body">
          <a href="https://dazzling-bartik-8685b0.netlify.app/home"> <button type="button" class="btn btn-secondary">live site</button> </a>
     <a href="https://github.com/arifulislam10111999/healthcare-hospital">  <button type="button" class="btn btn-secondary mx-3">client site</button></a>
    
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={onion} class="card-img-top" alt="..."/>
      <div class="card-body">
          <a href="https://arifulislam10111999.github.io/Resturent-of-Onion/"> <button type="button" class="btn btn-secondary">live site</button></a>
          <a href="https://github.com/arifulislam10111999/Resturent-of-Onion">  <button type="button" class="btn btn-secondary mx-3">github</button></a>
    

      </div>
    </div>
  </div>
</div>
</div>
     
    );
};

export default Portfolio;