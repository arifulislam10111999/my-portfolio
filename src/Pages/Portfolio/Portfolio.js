import React from 'react';
import fanta from '../image/Screenshot_5.png';
import car from '../image/Screenshot_2.png';
import helth from '../image/Screenshot_4.png';
import onion from '../image/onion.png';
import Slider from "react-slick";
// import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
const Portfolio = () => {
 
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    };
    return (
      <div style={{backgroundColor:"#DAD8D9"}} className="  " id="portfolio">
        <div className="container w-75 mx-auto py-5">
      <h2 className="text-center py-3 fw-bolder "> My portfolio work</h2>
      <Slider {...settings}>
        <div >
          <img style={{width:"100%",height:"auto"}} src={fanta} alt="kingdom" /> 
       
          <a target="_blank"  href="https://fantasy-tourism.web.app/" rel="noreferrer"> <button type="button" className="btn btn-success my-1 LinkHover">Live site</button></a>
          <a target="_blank"  href="https://github.com/arifulislam10111999/theme-park-client-site" rel="noreferrer"> <button type="button" className="btn btn-success my-1 LinkHover">Clint site</button></a>
          <a target="_blank"  href="https://github.com/arifulislam10111999/theme-park-server-site/blob/main/index.js" rel="noreferrer"> <button type="button" className="btn btn-success my-1 LinkHover">Server site</button></a>
          <Link to="/park">  <button className="btn btn-success my-1 mx-1 LinkHover" > View Details</button></Link>
        </div>
        <div >
          <img style={{width:"100%",height:"auto"}} src={car} alt="kingdom" />
          <a target="_blank"  href="https://rolls-royce-car.web.app/" rel="noreferrer"> <button type="button" className="btn btn-success my-1 LinkHover">Live site</button></a>
          <a target="_blank"  href="https://github.com/arifulislam10111999/Automobile-car-shop-clientside" rel="noreferrer"> <button type="button" className="btn btn-success my-1 LinkHover">Clint site</button></a>
          <a target="_blank"  href="https://github.com/arifulislam10111999/Automobile-car-serversite/blob/main/index.js" rel="noreferrer"> <button type="button" className="btn btn-success my-1 LinkHover">Server site</button></a>
          <Link to="/cars">  <button className="btn btn-success my-1 mx-1 LinkHover" > View Details</button></Link>
         
         
        </div>
        <div >
          <img style={{width:"100%",height:"auto"}} src={helth} alt="kingdom" />
          <a target="_blank"  href="https://dazzling-bartik-8685b0.netlify.app/" rel="noreferrer"> <button type="button" className="btn btn-success my-1 LinkHover">Live site</button></a>
          <a target="_blank"  href="https://github.com/arifulislam10111999/healthcare-hospital" rel="noreferrer"> <button type="button" className="btn btn-success my-1 LinkHover">GitHub</button></a>
          <Link to="/health">  <button className="btn btn-success my-1 mx-1 LinkHover" > View Details</button></Link>
        </div>
        <div >
          <img style={{width:"100%",height:"auto"}} src={onion} alt="kingdom" />
          <a target="_blank"  href="https://hot-onion-restaurant-3e8c6.web.app/?fbclid=IwAR2UHMbzH3ZQ7VlJerpwNTbEGs7Naa90AaUZZSRsLoLmLsaBhNxmQtyGa4k" rel="noreferrer"> <button type="button" className="btn btn-success my-1 LinkHover">Live site</button></a>
          <a target="_blank"  href="https://github.com/arifulislam10111999/Resturent-of-Onion" rel="noreferrer"> <button type="button" className="btn btn-success my-1 LinkHover">GitHub</button></a>
          <Link to="/onion">  <button className="btn btn-success my-1 mx-1 LinkHover" > View Details</button></Link>
        </div>
      
      </Slider>
     
    </div>
    </div>

 
    );
};

export default Portfolio;