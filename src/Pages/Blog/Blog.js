import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div style={{backgroundColor:"#F1E3E4"}}>
           <Link to="/"> <i className="fas fa-home text-black"> Home</i></Link>
     
        <div  className="text-center py-5 " >
            <h1>Blog content  is coming soon .....</h1>
            <h4 className="py-5">For new update please stay with us</h4>
        </div>   </div>
    );
};

export default Blog;