import React from "react";
import Profile from ""

function About() {
    return (
        <div className="about-container">
            <h5>About Me</h5>

            <img src={Profile} alt="profile-photo" className="profile float-left"></img>
            <div>
                <div className="mt-3">
                    <p>Fill out description</p>
                    <p>Strengths</p>
                    <p>Interests</p>
                </div>
            </div>
        </div>
    )
}

export default About;