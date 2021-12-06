import React,{useState} from 'react';

function Read() {
  const [readMore,setReadMore]=useState(false);
  
  const extraContent=<div>
    
      <p className="extra-content ">
      When people have spare time, they do and think about different things. In my case, I always consider about modern technology and system. This thought has opened up a new world for me. I'm really glad to say that, I am going to be a part of the modern world because of my work.   
      </p>
  </div>
  const linkName=readMore? <button className="btn btn-danger"> Read Less </button>:<button className="btn btn-success">Read More </button>
  return (
    <div className="App">
        <p>I am a junior web developer. I am very passionate that's why I can do things easily. Even if it is a  hard work, I really enjoy working because, I think it's not just all about work but at the same time doing my interest .....</p>
      
      {readMore && extraContent}
      <a className="read-more-link  " onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
    </div>
  );
}

export default Read;