// making first express server

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
  res.send([1, 2, 3, 4, 5, 6]);
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
