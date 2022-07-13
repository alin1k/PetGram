import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { postPet , getPetById, updatePetById } from "../api/index.js";



function Form(props){

    const {title} = props;
    const navigate = useNavigate();
    const {petId} = useParams();
    
    const [petObj, setPetObj] = useState({
        name: "",
        age: 0,
        type: "",
        color: "",
        favorite_activities: "",
    });
    



    useEffect(()=>{
        if(petId !== undefined){
            getPetById(petId).then(response=>{
                delete response.data._id;
                setPetObj(response.data);

            }).catch(error=>{
                console.log(error);
            })
        }
    }, [petId]);

    async function submitForm(event){
        event.preventDefault();

        if(petId !== undefined){
            await updatePetById(petId ,petObj).then(response=>{
                setPetObj({
                    name: "",
                    age: 0,
                    type: "",
                    color: "",
                    favorite_activities: "",
                });
            }).catch(error=>{
                console.log(error);
            })
        }else{
            await postPet(petObj).then(response=>{
                setPetObj({
                    name: "",
                    age: 0,
                    type: "",
                    color: "",
                    favorite_activities: "",
                });
            }).catch(error=>{
                console.log(error);
            })
        }

        navigate("/");
    }

    function handleChange(event){
        const {name, value} = event.target;
        setPetObj(prevValue=>{
            if(name === "color" || name === "favorite_activities"){
                return {...prevValue, [name]: value.toString().split(",")}
            }else{
                return {...prevValue, [name]: value}
            }
        });
    }

    return(
        <div className="row container-fluid px-4">
            <h1 className="display-3 text-center my-4">{title}</h1>

            <form className="col-4 row m-auto" onSubmit={submitForm}>
                <div className="mb-3 col-6">
                    <label htmlFor="petName" className="form-label">Pet's name</label>
                    <input type="text" name="name" value={petObj.name} className="form-control" id="petName" onChange={handleChange}/>
                </div>
                <div className="mb-3 col-3">
                    <label htmlFor="petType" className="form-label">Type of pet</label>
                    <input type="text" name="type" value={petObj.type} className="form-control" id="petType" placeholder="ex: cat" onChange={handleChange}/>
                </div>
                <div className="mb-3 col-3">
                    <label htmlFor="petAge" className="form-label">Pet's Age</label>
                    <input type="number" name="age" value={petObj.age} className="form-control" id="petAge" onChange={handleChange}/>
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="petColor" className="form-label">Pet's color</label>
                    <input type="text" name="color" value={petObj.color} className="form-control" id="petColor" onChange={handleChange}/>
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="petFavActiv" className="form-label">Pet's favorite activities</label>
                    <input type="text" value={petObj.favorite_activities} name="favorite_activities" className="form-control" id="petFavActiv" onChange={handleChange}/>
                </div>
                <button className="col-12 btn btn-dark mt-3" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;