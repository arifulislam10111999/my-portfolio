
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
    const form = useRef();
const sendEmail=e=>{
    e.preventDefault();
    emailjs.sendForm('service_51den0h', 'template_37hzuf9', form.current, 'user_pO9hwogEUYKWjz511uYzx')
    .then((result)=> {
             console.log(result.text);
         }, (error) => {
             console.log(error.text);
         
             });
             e.target.reset()
    
}   
    return (
        <div id="contact">


           <div className="row row-cols-lg-2 row-cols-1 py-5 container mx-auto">
               <div>
                 <h1>Contact us <br /> let's Discuss Your project</h1>
               
               </div>
               <div>
               <form ref={form} onSubmit={sendEmail}>
      <label>Name</label><br />
      <input type="text" name="user_name" /><br />
      <label>Email</label><br />
      <input type="email" name="user_email" /><br />
      <label>Message</label><br />
      <textarea name="message" /><br />
      <input type="submit" value="Send message" />
    </form>
               </div>
           </div> 
        </div>
    );
        };

        export default Contact;