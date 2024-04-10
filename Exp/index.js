// making first express server
const Joi = require("joi");
const login = require("./login");
const auth = require("./auth");
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("config");
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
/*
get: to get data
put: to update data
post: to add data
delete:to delete 
*/

// enviroment
// console.log(`Environemnt: ${process.env.NODE_ENV}`); this returns undefined if env varaible is not defined
// enviroment
// console.log(`Environemnt: ${app.get("env")}`);  this returns development by default

// config

console.log("config name: " + config.get("name"));
console.log("mail server name: " + config.get("mail.host"));
console.log("password: " + config.get("mail.password"));

/* app.get()
it takes two arguments  path and callback function
this callback function is called when we request to that path or url
callback function takes 2 arguments req and res
*/

//
app.use(helmet());
// console.log(app.get("env"));
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("morgan is running in development ");
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
// we store static file inside public folder like css,images..
// let hello.txt is inside public folder then when we go tp http://localhost:3000/hello.txt we can serve this static file to client

// creating custom middlewares

app.use(login);
app.use(auth);

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

function handleValidate(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(course);
}

// handling http post request
app.post("/courses", (req, res) => {
  // defining schema
  const result = handleValidate(req.body);
  // sending 400 bad request
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    course: req.body.name, // assuming req.body obj has a name property. to make this line work we need to enable working of json parser in body of req
  };
  courses.push(course);
  //when server perform post operation then it need to return that obj to the body of response
  res.send(course);
  console.log(courses);
});

// handling PUT request
app.put("/courses/:cid", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.cid));
  // gives course object
  if (!course) {
    res.status(404).send("course not available");
  }

  // const schema = Joi.object({
  //   name: Joi.string().min(3).required(),
  // });
  // const result = schema.validate(req.body);
  const result = handleValidate(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  course.course = req.body.name;
  // update course property inside course obj
  res.send(course);
});

// handling delete
app.delete("/courses/:cid", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.cid));

  if (!course) {
    res.status(404).send("course not found with this id");
    return;
  }
  // delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

const port = process.env.PORT || 3000;
console.log(process.env.PORT);
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
