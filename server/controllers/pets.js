import Pet from "../models/pet.js"


///////////////////////////   Actions for all pets   ///////////////////////////

export const getPets = async (req,res)=>{
    try {
        const pets = await Pet.find();

        res.status(200).json(pets);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getPetsByType = async (req, res)=>{
    const petType = req.params.type

    try {
        const pets = await Pet.find({type: petType});
        res.status(200).json(pets);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const postPet = async (req, res)=>{
    const pet = req.body;
    const createPet = new Pet(pet);

    try {
        await createPet.save();

        res.status(201).json(createPet);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const deletePets = async (req, res)=>{
    try {
        await Pet.deleteMany({});

        res.status(200).json("Pets deleted");
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}




///////////////////////////   Actions for a specific pet   ///////////////////////////

export const getPetByName = async (req, res)=>{
    try {
        const pet = await Pet.find({name: req.params.petName});

        res.status(200).json(pet);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getPetById = async (req, res)=>{
    try {
        const pet = await Pet.findById(req.params.petId);

        res.status(200).json(pet);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const updatePetById = async (req, res)=>{
    try {
        const pet = req.body;
        await Pet.findByIdAndUpdate(req.params.petId, pet);

        res.status(200).json(pet);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const deletePetByName = async (req,res)=>{
    try {
        await Pet.deleteOne({name: req.params.petName});

        res.status(200).json("Pet Deleted");
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const deletePetById = async (req, res)=>{
    try {
        await Pet.findByIdAndDelete(req.params.petId);

        res.status(200).json("Pet Deleted");
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}