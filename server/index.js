import express from 'express';
import mongoose from 'mongoose';
import path from "path";
import fs from 'fs';
import admin from 'firebase-admin';
import * as dotenv from "dotenv";
dotenv.config();

const credentials = {
    type: "service_account",
    "project_id": process.env.PROJECT_ID,
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    "client_email": process.env.CLIENT_EMAIL,
    "client_id": process.env.CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-znb6i%40to-do-lists-7ac90.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
  }

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// routers
import userRouter from "./src/routes/user-router.js";
import listRouter from "./src/routes/list-router.js";


// set up firebase admin 
// const credentialsPath = path.join(__dirname, './credentials.json');
// const credentials = JSON.parse(
//     fs.readFileSync(credentialsPath)
    
// );

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

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