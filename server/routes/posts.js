import express from "express";
import { getPets, newPet, deletePets, getPetByName, deletePetByName } from "../controllers/posts.js";

const router = express();

router.route("/")
    .get(getPets)
    .post(newPet)
    .delete(deletePets);

router.route("/:petName")
    .get(getPetByName)
    .delete(deletePetByName);

export default router;