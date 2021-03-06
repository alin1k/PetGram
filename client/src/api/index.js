import axios from "axios";

const url = process.env.REACT_APP_API_URL;




export const postPet = petObj => axios.post(url, petObj);

export const getPetById = id => axios.get(url + "/id/" + id);

export const updatePetById = (id, petObj) => axios.patch(url + "/id/" + id, petObj);

export const deletePetById = id => axios.delete(url + "/id/" + id);
