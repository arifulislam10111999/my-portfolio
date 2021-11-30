import React from 'react';
import image9 from '../detailImg/Screenshot_13.png'
import image10 from '../detailImg/Screenshot_14.png'
import image11 from '../detailImg/Screenshot_15.png'
import image12 from '../detailImg/Screenshot_16.png'
import image13 from '../detailImg/Screenshot_17.png'
import { Link } from 'react-router-dom';
const Helth = () => {
    return (
        <div>
             <Link to="/"> <i className="fas fa-home text-black"> Home</i></Link>
            <h1 className="text-center py-5"> Health care  and diagnosis center </h1>
            <p className="text-center w-50 mx-auto">stay home stay safe .It is the health care hospital</p>
            <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src={image13} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Patient sign up </h5>
        <h5>users need</h5>
        <ul>
          <li>for appointment make sure you  are sign in</li>
          <li>google sign in</li>
          <li>Facebook sign in</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={image10} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Visual doctor</h5>
       <h5>Patient meet</h5>
       <ul>
         <li>Patient can meet with doctor visually</li>
         <li>also make prescription visually</li>
       </ul>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={image9} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Diagnosis area</h5>
        <h5>Techonology</h5>
        <ul>
          <li>ct san </li>
          <li>mri</li>
          <li>X-ray</li>
          <li>ECG</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={image12} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Medication</h5>
        <p class="card-text">when the patient need all time doctor support patient nedded to meadation in hospital </p>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Helth;