import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: String,
    age: Number,
    type: String,
    color: [String],
    favorite_activities: [String],
});

const Pet = mongoose.model("Pet", petSchema);

export default Pet;