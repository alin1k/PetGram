import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="container-fluid d-flex justify-content-between align-items-center py-3 px-5 bg-dark text-light">
            <div>
                <h2>PetGram</h2>
            </div>
            <ul className="d-flex justify-content-around align-items-center list-unstyled m-0">
                <li className="me-5"><Link to="/" className="link-light text-decoration-none">Home</Link></li>
                <li><Link to="/add-pet" className="link-light text-decoration-none">Add Pet</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;