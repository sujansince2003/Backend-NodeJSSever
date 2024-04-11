// making first express server
const Joi = require("joi");
const login = require("./middlewares/login");
const auth = require("./middlewares/auth");
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("config");

// importing router
const courses = require("./routes/courses");
const home = require("./routes/home");

// debug
const firstdebugger = require("debug")("firstdebug");
const seconddebugger = require("debug")("seconddebug");

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

  firstdebugger("this is first debugger message");
  seconddebugger("this is second debugger message");
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
// we store static file inside public folder like css,images..
// let hello.txt is inside public folder then when we go tp http://localhost:3000/hello.txt we can serve this static file to client

// creating custom middlewares

app.use(login);
app.use(auth);

// templating engines
app.set("view engine", "pug");

app.use("/", home);
app.use("/courses", courses);

const port = process.env.PORT || 3000;
console.log(process.env.PORT);
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
