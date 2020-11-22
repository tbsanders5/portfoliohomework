import React from "react";
import ContactPic from ""

function ContactCard(props) {
    return (
        <div className="contact-card">
            <div className="card">
                <h1 className="card-content">Contact Me</h1>
                <div className="card-content">
                    <a href="tel:+3104264601" className="ml-4 mt-4 font-weight-bold">Phone</a>
                    <a href="mailto:webmaster@tbsanders5@gmail.com" className="ml-4 mt-4 font-weight-bold">Email</a>
                    <a href="www.linkedin.com/in/timothy-sanders-540b6656" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>
                    <a href="https://github.com/tbsanders5" className="ml-4 mt-4 font-weight-bold">Github</a>
                    <img src={ContactPic} alt="profile-photo" className="profile float-left"></img>
                </div>
        </div>
       </div> 
    );
}

export default ContactCard;