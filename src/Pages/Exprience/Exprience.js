import React from 'react';
import Education from '../Education/Education';

const Exprience = () => {
    return (
        <div id="experience" className="w-75 mx-auto ">
            <h1 className="text-center py-5">Experience</h1>
            <div className="row mb-5">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">I did a course </h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
       
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"> Car branding and </h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      
      </div>
    </div>
  </div>
</div>
        <Education></Education> 
        </div>
    );
};

export default Exprience;