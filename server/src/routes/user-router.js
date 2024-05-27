import express from "express";
import {User} from "../models/UserModel.js";
import {sendServerError} from "../error.js";


const router = express.Router();

router.get("/:emailParams", [getUser]);
router.post("/", [createUser]);

// checks if the user is logged in, continues to next functionality if so
async function isLoggedIn(req, res, next){
    if (req.user){
        next();
    }else {
        res.sendStatus(401);
    }
}

async function getUser(req, res, next){
    try {
        const {emailParams} = req.params;
        const {uid, email} = req.user;
        
        if (emailParams === email){
           
            let u = await User.findOne({user_email: email});
           
            return res.status(200).send(u);
        }

        return res.status(404).send({email: email, name: ""});

    }catch (error){
        sendServerError(error);
    }
}

// creates a new user in mongodb given email and name
async function createUser(req, res, next){
    try {

        const {email,name} = req.body;

        const newUser = new User({user_email: email, name: name});
        const result = await User.create(newUser);
        return res.status(201).send(result);

    } catch (error){
        sendServerError(error, res);
    }
}

export default router;