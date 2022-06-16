import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Pets from "./components/pets/Pets.js";
import Navbar from "./components/Navbar.js";
import AddPet from "./components/AddPet.js"

function App(){
    return(
        <Router>
            <div className="container-fluid p-0">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Pets />}/>
                    <Route path="/add-pet" element={<AddPet />} />
                    <Route
                    path="*"
                    element={
                        <div>
                            <h1 className="display-3 text-center my-4">404 Page not found</h1>
                            <p className="lead text-center">Check if the link is correct</p>
                        </div>
                    }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;