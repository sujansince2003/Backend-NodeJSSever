const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/mongo-exercises")
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
const Coursemodel = mongoose.model("coursess", courseSchema);

// get all  courses
async function Getall() {
  const bcourse = await Coursemodel.find({});
  console.log(bcourse);
}

Getall();

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

// get15();

// updating documents
// query first approach
async function updateDoc(id) {
  //   const course = await .findById();
  console.log(course);
  //   if (!course) return;
  //   course.isPublished = true;
  //   course.author = "new author";
  //   also we can use
  /* 
  course.set(
      {
      isPublished:true,
      author:"new author"
      }
  )
  
  */

  //   const result = await course.save();
  //   console.log(result);
  //   console.log("ok");
}

// updateDoc("5a68fdd7bee8ea64649c2777");

async function updateDoc(id) {
  const course = await Coursemodel.findById(id);
  console.log("Found course:", course);
}

// updateDoc("5a68fe2142ae6a6482c4c9cb");
async function updateDoc(id) {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ID provided.");
      return;
    }

    const course = await Coursemodel.findById(id);
    console.log("Found course:", course);
  } catch (error) {
    console.error("Error:", error);
  }
}

updateDoc("5a68fe2142ae6a6482c4c9cb");
