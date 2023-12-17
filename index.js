const http = require("http");

const server = http.createServer((req, res) => {
  console.log("creating server");
  res.end("noice");
});
server.listen(3002, () => {
  console.log("server is working d");
});
