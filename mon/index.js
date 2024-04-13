// mongo notes
/*
mongosh
show dbs : show data bases
use <dbsNamw>  switch between databases
show collections   show collections of db


basic steps of using mongodb
schema :define the structure
  schema -> model
     model is used for CRUD operations

*/

const mongoose = require("mongoose");
const { unique } = require("underscore");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((err) => console.log(err));

// defining schemas
const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
});

// schema to model
//  mongoose.model("nameofModel",userSchema)
const Usermodel = mongoose.model("usermodel", userSchema);
