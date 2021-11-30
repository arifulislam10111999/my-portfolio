import React from 'react';
import imgag15 from '../detailImg/Screenshot_6.png'
import imgag16 from '../detailImg/Screenshot_7.png'
import imgag17 from '../detailImg/Screenshot_8.png'
import { Link } from 'react-router-dom';
const Cars = () => {
    return (
        <div>
             <Link to="/"> <i className="fas fa-home text-black"> Home</i></Link>
            <h1 className="text-center py-5">Do you have dreams about the car you can explore my car shop</h1>
            <p className="text-center">world famous car is here . you by any type of car . if it is not avialable her we can provide  it after few weak </p>
 

            <div class="row row-cols-1 row-cols-md-2 g-4 container w-75 py-5 mx-auto">
  <div class="col">
    <div class="card">
      <img src={imgag17} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Log in area</h5>
        <ul>
            <li>log in with google</li>
            <li>log in with email and password</li>
            <li>Redriceate page</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={imgag15} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"> bran new car </h5>
      <ul>
          <li>also here bugati brun</li>
          <li>BMW care</li>
      </ul>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={imgag16} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Car puches</h5>
        <ul>
            <li>you can by car click the button</li>
        </ul>
      </div>
    </div>
  </div>
 


</div>
<h3 className="text-center pt-5"> Summary fo the technology and tools</h3>
<hr/>
<div className="row row-cols-lg-2 row-cols-1 container w-75 mx-auto">
<div>
    <h4>Techonology</h4>
    <ul>
        <li>React</li>
        <li>node js</li>
        <li>mongodb</li>
        <li>firebase</li>
        <li>css</li>
        <li>bootstrap</li>
    </ul>
</div>
<div>
    <h4>Tools</h4>
    <ul>
        <li>VS code</li>
        <li>git /gitHib</li>
        <li>heroKu</li>
    </ul>
</div>
</div>
        </div>
    );
};

export default Cars;