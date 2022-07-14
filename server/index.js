import express from "express";
import bodyParser from "body-parser";
import postRoutes from "./routes/pets.js";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config';

const app = express();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/pets", postRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://alin-olt:' + process.env.USER_PASSWORD + '@cluster.zspp020.mongodb.net/petsDB', {useNewUrlParser: true})
    .then(()=>app.listen(PORT, ()=>{
        console.log(`Server started on port ${PORT}`);
    }))
    .catch((err)=> console.log(err));

