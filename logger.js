const url = "https://helloworld.com";

function Hello() {
  console.log("hello world this is node");
}

module.exports.url = url;
module.exports.Hello = Hello;

// checking module wrappers params
console.log(__filename);
console.log(__dirname);

// __filename and __dirname are special variables that provide information about the current module's file path

// console.log(module);   gives detail about the module
