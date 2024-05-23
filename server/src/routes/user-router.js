import express from "express";


const router = express.Router();

router.post("/", [createUser]);


async function createUser(req, res, next){
    
}