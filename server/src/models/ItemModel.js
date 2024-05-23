import mongoose from "mongoose";
import mongodb from "mongodb";

const objID = mongodb.ObjectId;
const Schema = mongoose.Schema;

const itemSchema = Schema({
    id: objID,
    name: {type: String, required: true},
    checked: {type: Boolean, default: false}
});

export const Item = mongoose.model("Item", itemSchema);