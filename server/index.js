import express from 'express';
import mongoose from 'mongoose';
import path from "path";
import fs from 'fs';
import admin from 'firebase-admin';
import * as dotenv from "dotenv";
dotenv.config();

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// routers
import userRouter from "./src/routes/user-router.js";
import listRouter from "./src/routes/list-router.js";


// set up firebase admin 
const credentialsPath = path.join(__dirname, './credentials.json');
const credentials = JSON.parse(
    fs.readFileSync(credentialsPath)
    
);

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});


const app = express();
app.use(express.json());

const PORT =  8000;

// express middleware 
// - loads user's info whenever we receive a request
app.use( async (req, res, next) => {

    const {authtoken} = req.headers;
    req.user = null;

    if (authtoken){
        
        try {

            const user = await admin.auth().verifyIdToken(authtoken);
           
            req.user = user;
            
        }catch (e){
            return res.status(400).send(e);
        }
    }
    
    if (req.user == null){
        req.user = {};
    }
    next();

});

app.use("/api/users", userRouter);
app.use("/api/lists", listRouter);



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