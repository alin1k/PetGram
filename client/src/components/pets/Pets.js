import React, {useState, useEffect} from "react";
import { deleteByName } from "../../api/index.js";
import axios  from "axios";

import Pet from "../pet/Pet";

function Pets(props){
    const [pets, setPets] = useState([]);
    const [trigger, setTrigger] = useState(true); //to triger useEffect when the database updates

    useEffect(()=>{
        //fetch all pets from the server
        axios.get('http://localhost:5000/pets')
            .then(function (response) {
                console.log(response.data);
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
                key={pet.name}
                petObject={pet}
                deletePet={deleteByName}
                setTrigger={setTrigger}
                /> 
            )}
        </div>
    );
}

export default Pets;