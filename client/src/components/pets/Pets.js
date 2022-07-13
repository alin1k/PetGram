import React, {useState, useEffect} from "react";
import { deletePetById } from "../../api/index.js";
import axios  from "axios";

import Pet from "./Pet.js";

function Pets(props){
    const [pets, setPets] = useState([]);
    const [trigger, setTrigger] = useState(true); //to triger useEffect when the database updates

    useEffect(()=>{
        //fetch all pets from the server
        axios.get('http://localhost:5000/pets')
            .then(function (response) {
                //set pets array to fethed data
                setPets(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [trigger]);

    return(
        <div className="row container-fluid m-0">
            <h1 className="display-3 text-center my-4">My Pets</h1>
            {pets.map((pet)=> 
                <Pet 
                key={pet._id}
                petObject={pet}
                deletePet={deletePetById}
                setTrigger={setTrigger}
                /> 
            )}
        </div>
    );
}

export default Pets;