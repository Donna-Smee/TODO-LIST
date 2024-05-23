import mongoose from "mongoose";
import mongodb from "mongodb";

const objID = mongodb.ObjectId;
const Schema = mongoose.Schema;

const userSchema = Schema({
    id: objID,
    user_email: {type: String, required: true},
    name: {type: String, required: true},
    lists: [{type: Schema.Types.ObjectId, ref: List}]
});

export const User = mongoose.model("User", userSchema);