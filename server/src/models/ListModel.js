import mongoose from "mongoose";
import mongodb from "mongodb";
import { Item } from "./ItemModel.js";

const objID = mongodb.ObjectId;
const Schema = mongoose.Schema;

const listSchema = Schema({
    id: objID,
    name: {type: String, required: true},
    items: [{type: Schema.Types.ObjectId, ref: Item}],
    active: {type: Boolean, default: true},
    user_email: {type: String, required: true}
});

export const List = mongoose.model("List", listSchema);