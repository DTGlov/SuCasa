import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    image: String,
    capital: String,
    slug:String
});

const locationDB = mongoose.model("LocationDB", locationSchema);
export default locationDB;