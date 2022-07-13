import express from "express";
import { getPets, postPet, deletePets, getPetByName, deletePetByName, getPetsByType, getPetById, deletePetById, updatePetById } from "../controllers/pets.js";

const router = express();

router.route("/")
    .get(getPets)
    .post(postPet)
    .delete(deletePets);

router.route("/:petName")
    .get(getPetByName)
    .delete(deletePetByName);
    
router.route("/type/:type")
    .get(getPetsByType);

router.route("/id/:petId")
    .get(getPetById)
    .delete(deletePetById)
    .patch(updatePetById);

export default router;