import React from "react";
import { useNavigate } from "react-router-dom";

function Pet(props){
    const {name, age, color, favorite_activities, type, _id} = props.petObject;
    const navigate = useNavigate();

    return(
        <div className="col-3 p-3">
            <div className="card shadow-sm rounded-4">
                <div className="card-body">
                    <button type="button" className="btn-exit" 
                        onClick={() =>{
                            //when closed button is clicked it deletetes the pet object from the database and triggers the useEffect from Pets.js
                            props.deletePet(_id).then((response)=>{
                                props.setTrigger(prevValue => !prevValue);
                            });
                        }}
                    ><i class="fa-solid fa-x"></i></button>
                    <button type="button" className="btn-edit"
                        onClick={()=>{
                            navigate("/edit-pet/" + _id);
                        }}
                    ><i className="fa-solid fa-pencil"></i></button>

                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle text-muted mb-3">I am a {type}</h6>
                    <p className="card-text mb-0">I am {age} years old</p>
                    <p className="card-text mb-0">My furr is {color.map((color) => {return `${color}, ` })}</p>
                    <p className="card-text">My favorite activities are {favorite_activities.map((activity) => {return `${activity}, ` })}</p>
                </div>
            </div>
        </div>
    )
}

export default Pet;