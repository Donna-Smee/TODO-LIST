import express from "express";
import {sendServerError} from "../error.js";
import { List } from "../models/ListModel.js";
import { Item } from "../models/ItemModel.js";
import { User } from "../models/UserModel.js";
import {ObjectId} from "mongoose";


const router = express.Router();

router.get("/", [isLoggedIn, getLists]);

router.get("/:listID", [isLoggedIn, getUserEmailForList, verifyUserForList, getList]);
router.post("/", [isLoggedIn, createList]);
router.post("/:listID/items", [isLoggedIn, getUserEmailForList, verifyUserForList, addItem]);

router.get("/:listID/items/:itemID", [isLoggedIn, getUserEmailForList, verifyUserForList, getItem]);

router.put("/:listID/items/:itemID/check", [isLoggedIn, getUserEmailForList, verifyUserForList, getCheckedStatus, checkItem]);

router.delete("/:listID/items/:itemID", [isLoggedIn, getUserEmailForList, verifyUserForList, removeItem]);
router.delete("/:listID/items", [isLoggedIn, getUserEmailForList, verifyUserForList, clearList]);
router.delete("/:listID", [isLoggedIn, getUserEmailForList, verifyUserForList, deleteList]);

async function isLoggedIn(req, res, next){
    if (req.user){
        
        next();
    }else {
        res.status(401).send(null);
    }
}

async function getUserEmailForList(req, res, next){
    // get the listID
    const {listID} = req.params;
    try {
        const result = await List.findById(listID);
        if (result){
       
            req.listUserEmail = result.user_email;
           
            next();
            return;
        }
        res.status(404).send("This list does not exist.");
        
    }catch (e){
        sendServerError(e);
    }
}


// given user that is logged in, and the user (creator) or the given listID, see if they match
async function verifyUserForList(req, res, next){
    try {
        const {email} = req.user;
     
        if (email == req.listUserEmail){
            next();
            return;
        }
        res.status(401).send("Not authorized to see this list");
    }catch (e){
        sendServerError(e);
    }

}

async function getList(req, res, next){
    const {listID} = req.params;

    try {
        const result = await List.findById(listID).populate("items");
        res.status(200).send(result);

    } catch (e){
        sendServerError(e);
    }
}

async function createList(req, res, next){
    try {
        const {listName} = req.body;
        const {email} = req.user;

        const newList = new List({name: listName, user_email: email});
        const result = await List.create(newList);
        return res.status(201).send(result);

    }catch(e){
        sendServerError(e);
    }
}


async function addItem(req, res, next){
    try {
        const {listID} = req.params;
        const {itemName} = req.body;

        const newItem = new Item({name: itemName});
        const result = await Item.create(newItem);
        if (result){
            const listResult = await List.findByIdAndUpdate(listID, {$push: {items: result._id}});
            const updatedList = await List.findById(listID).populate("items");
          
            res.status(200).send(updatedList);
            return;
        }

        res.status(500).send(null);

    }catch(e){
        sendServerError(e);
    }
}

async function getItem(req, res, next){
    try{
        const {itemID} = req.params;

        const result = await Item.findById(itemID);
        if (result) {
            res.status(200).send(result);
            return;
        }
        res.status(404).send(null);

    }catch (e){
        sendServerError(e);
    }
}

async function getLists(req, res, next){
    try {

        const {email} = req.user;
        const result = await List.find({user_email: email}).populate("items");
        res.status(200).send(result);

    }catch (e){
        sendServerError(e);
    }
}


async function getCheckedStatus(req, res, next){
    try {
        const {itemID} = req.params;
        let result = await Item.findById(itemID);
        if (result){
            req.itemCheck = result.checked;
            next();
            return;
        }
        res.status(500).send(null);
    }catch (e) {
        sendServerError(e);
    }
}


async function checkItem(req, res, next){
    try {
        const {listID, itemID} = req.params;

        // first update the item checked 

        let itemResult = await Item.findByIdAndUpdate(itemID, {checked: !(req.itemCheck)});
       

        // then get list and return
        const result = await List.findById(listID).populate("items");
        res.status(200).send(result);

    }catch (e){
        sendServerError(e);
    }
}

async function removeItem(req, res, next){
    try {
        const {listID, itemID} = req.params;

        // remove itemID from list items array
        
        let listResult = await List.findByIdAndUpdate(listID, {$pull: {items: itemID}});
        
        // delete item
        const removedItem = await Item.findByIdAndDelete(itemID);

        let result = await List.findById(listID).populate("items");
        
        res.status(200).send(result);

    }catch (e){
        sendServerError(e);
    }
}



async function clearList(req, res, next){
    try {
        const {listID} = req.params;

        let listItems = await List.findById(listID);
        listItems = listItems.items;

        for (let item of listItems){
            await Item.findByIdAndDelete(item);
        }

        let result = await List.findById(listID).populate("items");
        res.status(200).send(result);

    }catch (e){
        sendServerError(e);
    }
}


async function deleteList(req, res, next){
    try {
        const {listID} = req.params;
        let listItems = await List.findById(listID);
        listItems = listItems.items;

        for (let item of listItems){
            await Item.findByIdAndDelete(item);
        }
        
        const result = await List.findByIdAndDelete(listID);
        res.sendStatus(200);
    }catch (e){
        sendServerError(e);
    }
}

export default router;