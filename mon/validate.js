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
    lowercase: true,
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
    validate: {
      validator: function (v) {
        return v > 3;
      },
      message: "Enter value greater than 3",
    },
  },
  age: {
    required: true,
    type: Number,
    validator: function (v) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (v > 20) {
            resolve(true);
          } else {
            reject(new Error("enter age greater than 20"));
          }
        }, 3000);
      });
    },
  },
});

// schema to model
//  mongoose.model("nameofModel",userSchema)
const Usermodel = mongoose.model("usermodel", userSchema);

async function createUser() {
  const user = new Usermodel({
    fname: "SUJAN BagUS ZuxxY",
    lname: "khatri",

    roll: 45 ,
    age: 13,
  });

  try {
    await user.validate();
    const result = await user.save();
    console.log(result);
  } catch (err) {
    console.log(err.message);
    // for (field in err.errors) {
    //   console.log(err.errors[field]);
    // }
  }
}
createUser();

// to retrieve data
async function getData() {
  const users = await Usermodel.find({ fname: "sujan" });
  console.log("data is", users);
}

// getData();
