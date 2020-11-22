import React from "react";
import HomePic from ""

function Home() {
    return (
        <div className="row row-home">
            <div className="col-4">
                <div className="card card-home">
                    <div className="card-body">
                        <img src={HomePic} alt="home-profile-photo" className="home-pic mb-3"></img>
                        <h5 className="card-title text-center">Full Stack Web Developer</h5>
                        <p className="card-text text-center">Dedicated and passionate professional.</p>
                        <a href="www.linkedin.com/in/timothy-sanders-540b6656" className="ml-5">LinkedIn</a>
                        <a href="https://github.com/tbsanders5" className="ml-5">Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;