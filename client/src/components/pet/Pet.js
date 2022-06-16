import React from "react";

function Pet(props){
    const {name, age, color, favorite_activities, type} = props.petObject;

    return(
        <div className="col-3 p-3">
            <div className="card shadow-sm rounded-4">
                <div className="card-body">
                    <button type="button" className="btn-close" 
                    onClick={() =>{
                        //when closed button is clicked it deletetes the pet object from the database and triggers the useEffect from Pets.js
                        props.deletePet(name).then((response)=>{
                            props.setTrigger(prevValue => !prevValue);
                            console.log(response);
                        });
                    }}></button>
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle text-muted mb-3">I am a {type}</h6>
                    <p className="card-text mb-0">I am {age} years old</p>
                    <p className="card-text mb-0">My furr is {color.map((color, index) => {return `${color}, ` })}</p>
                    <p className="card-text">My favorite activities are {favorite_activities.map((activity, index) => {return `${activity}, ` })}</p>
                </div>
            </div>
        </div>
    )
}

export default Pet;