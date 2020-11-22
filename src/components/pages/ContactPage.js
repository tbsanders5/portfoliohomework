import React from "react";
import { Link, Route } from "react-router-dom";
import LearnPage from "./LearnPage";
import Contact from "../Contact";

function ContactPage(props) {
    return (
        <div>
            <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link bg-light">
                Learn More
            </Link>{" "}
            <Link to="/contact" role="button" className="btn btn-link bg-light">
                Learn Less
            </Link>
            <Route exact path={`${props.match.url}/learn`} component={LearnPage} />

            <Contact />
        </div>
    );
}

export default ContactPage;