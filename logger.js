const url = "https://helloworld.com";

function Hello() {
  console.log("hello world this is node");
}

module.exports.url = url;
module.exports.Hello = Hello;

// console.log(module);   gives detail about the module
