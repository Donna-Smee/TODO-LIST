import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("hello world!");
});

mongoose.connect(process.env.MONGODBURL)
    .then(() => {
        console.log("Connected to database");
        app.listen(PORT, () => {
            console.log("Server is listening on port " + PORT);
        });
    })
    .catch((error) =>{
        console.log(error);
    }); 