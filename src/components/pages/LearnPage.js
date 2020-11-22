import React from "react";
import ResumePic from ""

function LearnPage() {
    return (
        <div className="contact-card">
            <div className="card">
                <h1 className="text-center">Resume</h1>
                <div className="card-Content">
                    <a href="tel:+3104264601" className="ml-4 mt-4 font-weight-bold">Phome</a>
                    <a href="" className="ml-4 mt-4 font-weight-bold">Linked In</a>
                    <a href="" className="ml-4 mt-4 font-weight-bold">Github</a>
                    <img src={ResumePic} alt="profile-photo" className={resumePIC}></img>
                    <a href=""><h1 className="text-center mt-2">View Here</h1></a>
                </div>
            </div>
        </div>
    );
}

export default LearnPage;