// mongo notes
/*
mongosh
show dbs : show data bases
use <dbsNamw>  switch between databases
show collections   show collections of db


*/

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((err) => console.log(err));
