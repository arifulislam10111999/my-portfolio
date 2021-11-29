import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Exprience from '../Exprience/Exprience';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
import Portfolio from '../Portfolio/Portfolio';
import Service from '../Service/Service';
import HomeChild from './HomeChild';

const Home = () => {
    return (
        <div>
        <NavigationBar></NavigationBar>
         <HomeChild></HomeChild>
         <AboutUs></AboutUs>
          <Service></Service>
          <Exprience></Exprience>
          <Portfolio></Portfolio>
          {/* <Blog></Blog> */}
          <Contact></Contact>
          <Footer></Footer>
    
        </div>
    );
};

export default Home;