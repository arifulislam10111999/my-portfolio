import React from 'react';
import Education from '../Education/Education';

const Exprience = () => {
    return (
        <div id="experience" className="w-75 mx-auto ">
            <h1 className="text-center py-5">Experience</h1>
            <div className="row mb-2">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">I did a course from programming hero  </h4>
        <p className="card-text">A course that I finished from Programming Hero.
From the course I've learned about modern web technology which made me a  great developer. I'm really grateful to Programming Hero for helping me enhance my knowledge and skills to be more suitable and motivated in doing the tasks. </p>
        <p>Technological skills that I learned:</p>
        <ul>
          <li>Html</li>
          <li>JavaScript</li>
          <li>React Js</li>
          <li>Mongo Db</li>
        </ul>
       
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"> Car branding and make a website for it</h5>
        <p className="card-text">This project is make a full stack website . I use this project front end back end and server also</p>
        <p>Project technology </p>
        <ul>
          <li>React js</li>
          <li>node js</li>
          <li>mongo db</li>
          <li>express</li>
          <li> Bootstrap </li>
          </ul>
      
      </div>
    </div>
  </div>
</div>
        <Education></Education> 
        </div>
    );
};

export default Exprience;