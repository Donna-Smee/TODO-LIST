import mongoose from "mongoose";
import mongodb from "mongodb";

const objID = mongodb.ObjectId;
const Schema = mongoose.Schema;
import { List } from "./ListModel.js";

const userSchema = Schema({
    id: objID,
    user_email: {type: String, required: true},
    name: {type: String, required: true},

});

export const User = mongoose.model("User", userSchema);