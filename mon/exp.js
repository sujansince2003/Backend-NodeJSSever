const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongo-exercises");

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

// async function getCourses() {
//   return await Course.find({ isPublished: true, tags: "backend" })
//     .sort({ name: 1 })
//     .select({ name: 1, author: 1 });
// }

// async function run() {
//   const courses = await getCourses();
//   console.log(courses);
// }

// run();

async function getCourses(id) {
  const courses = await Course.findById(id);
  console.log(courses);
}

getCourses("661d3cdcc16b3668bf6e1ec1");
