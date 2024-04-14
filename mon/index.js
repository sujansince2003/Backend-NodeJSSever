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
const { Schema } = mongoose;

mongoose
  .connect("mongodb://127.0.0.1:27017/hellodb")
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

  lname: {
    type: String,
  },
  id: {
    type: Schema.Types.ObjectId, // Use MongoDB's ObjectId for the id field
    required: true,
    unique: true,
    default: () => new mongoose.Types.ObjectId(), // Automatically generate a new ObjectId
  },
  roll: {
    type: Number,
  },
});

// schema to model
//  mongoose.model("nameofModel",userSchema)
const Usermodel = mongoose.model("usermodel", userSchema);

async function createUser() {
  const user = new Usermodel({
    fname: "sharmila",
    lname: "khatri",
    roll: 30,
  });
  const result = await user.save();
  console.log(result);
}
// createUser();

// to retrieve data
async function getData() {
  const users = await Usermodel.find({ fname: "sujan" });
  console.log("data is", users);
}

// getData();

// complex queries

async function comgetdata() {
  const cdata = await Usermodel.find({})
    .limit(1) //set limit to number of data we need
    .sort({ fname: 1 }) // sort by name in ascending order  -1 for descending order
    .select({ fname: 1 }); //manually tell which property we need
  console.log(cdata);
}

// comgetdata();

// compariison query operators
/*
eq: equal
ne : not equal
gt: greater than
gte greater and equal to
lt lte
in
nin  not in
*/

async function compoperators() {
  const result = await Usermodel.find({ roll: { $gte: 10 } });
  const indata = await Usermodel.find({ roll: { $in: [10, 15, 30] } });
  console.log(result);
  console.log("this is indata", indata);
}

// compoperators();
async function logFun() {
  // find data where roll is between 11 and 49 and fname is sharmila. both condition need to match
  const logdata = await Usermodel.find({
    $and: [{ roll: { $gt: 10, $lt: 50 } }, { fname: { $eq: "sharmila" } }],
  });
  console.log(logdata);
  // find data where name is either sujan or roll gte 10. one condition need to match
  const logdataor = await Usermodel.find({
    $or: [{ name: { $eq: "sujan" } }, { roll: { $gte: 10 } }],
  });
  console.log(logdataor);
}

logFun();
