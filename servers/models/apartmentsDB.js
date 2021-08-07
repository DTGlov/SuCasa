import mongoose from "mongoose";

const apartmentSchema = new mongoose.Schema({
  image: String,
  title: String,
    price: String,
  description:String,
  beds: Number,
    baths: Number,
    dimension: String,
  areacode:String,
  Balcony: Boolean,
  Furnished: Boolean,
  LocationId: String,
  slug: String,
});

const apartmentDB = mongoose.model("ApartmentDB", apartmentSchema);
export default apartmentDB;