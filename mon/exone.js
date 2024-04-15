const mongoose = require("mongoose");
const { get } = require("underscore");

mongoose
  .connect("mongodb://127.0.0.1:27017/mongoexercises")
  .then(() => {
    console.log("mongo connect");
  })
  .catch(() => {
    console.log("error occured");
  });

//   creating schema
const courseSchema = new mongoose.Schema({
  tags: [String],
  date: Date,
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number,
});

// creating model
const Coursemodel = mongoose.model("courses", courseSchema);

// get all  courses
async function Getall() {
  const bcourse = await Coursemodel.find({});
  console.log(bcourse);
}

// Getall();

async function GetBackend() {
  const bcourse = await Coursemodel.find({
    $or: [
      {
        name: /.*Node.*/i,
      },
      { name: /.*Express.*/i },
      { name: /.*ASP.*/i },
    ],
  })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
  console.log(bcourse);
}
// GetBackend();

async function getFb() {
  const fbdata = await Coursemodel.find({})
    .sort({ price: -1 })
    .select({ name: 1, author: 1 });
  console.log(fbdata);
}

// getFb();

async function get15() {
  try {
    const gtc = await Coursemodel.find({
      price: { $gte: 5 },
      name: /.*by.*/i,
    });
    console.log(gtc);
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
}

get15();
