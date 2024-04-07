var _ = require("underscore");
// first checks in core module then file or folder then in node_modules folder

const result = _.contains([1, 3, 4, 5], 4);
console.log(result);

const mypkg = require("hellosujan");
mypkg.printName("sujan");
mypkg.printCountry();
// console.log(mypkg);
