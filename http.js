const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.write("HEllo WOrld");
    res.end();
  }
});

// server.on("connection", (socket) => {
//   console.log("A new connection was established.");
// });  this is very low level way of creating server we mostly use http.createServer(); in more advance way

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
