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
    minlength: 2,
    maxlength: 255,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },

  lname: {
    type: String,
    required: function () {
      return this.fname;
    },
    /*
    fname huda lname ni huna paryo vanera garauna paryo vaney in required key we define a function.but dont use arrow function as arrow func dont have own this object
    
    */
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
    fname: "sujddan",
    lname: "khatri",

    roll: 3,
  });

  try {
    // await user.validate();
    const result = await user.save();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}
createUser();

// to retrieve data
async function getData() {
  const users = await Usermodel.find({ fname: "sujan" });
  console.log("data is", users);
}

// getData();
