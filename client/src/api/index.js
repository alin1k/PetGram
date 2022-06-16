import axios from "axios";

const url = 'http://localhost:5000/pets';

export const deleteByName = (name) => axios.delete(url + `/${name}`);

export const postPet = (petObj) => axios.post(url, petObj);