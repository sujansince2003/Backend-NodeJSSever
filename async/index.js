// async
console.log("this is first");
const uinfo = getInfo(90);
console.log(uinfo);
console.log("this is 7last");

function getInfo(pid) {
  setTimeout(() => {
    console.log("logged after 2 seconds");
    return { id: pid, name: "sujan" };
  }, 2000);
}

// callback

// function
function greet(name, callback) {
  console.log(name);
  callback();
}

// callback function
function callMe() {
  console.log("this is callback");
}

// passing function as an argument
greet("Sujan", callMe);
