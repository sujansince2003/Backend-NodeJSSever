// making first express server

const courses = [
  { id: 1, course: "CSIT" },
  { id: 2, course: "BCA" },
  { id: 3, course: "BIT" },
  { id: 4, course: "BIM" },
];

const express = require("express"); //this returns a function
const app = express();
// app is object here
// app has different methods like app.get(),app.post()...

/* app.get()
it takes two arguments  path and callback function
this callback function is called when we request to that path or url
callback function takes 2 arguments req and res
*/
app.get("/", (req, res) => {
  res.send("Hello express");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

// Route parameters

app.get("/courses/:cid", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.cid));

  if (!course) res.status(404).send("Data not found");
  res.send(course);
});

const port = process.env.PORT || 3000;
console.log(process.env.PORT);
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
