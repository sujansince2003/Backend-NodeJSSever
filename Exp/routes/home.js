const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  // res.send("Hello express");
  // for templating engines
  res.render("index", {
    title: "My Express app",
    message: "This is usecase of tempalting engines",
  });
});

module.exports = router;
