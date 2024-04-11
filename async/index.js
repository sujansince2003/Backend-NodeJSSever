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

// Example function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating fetching data asynchronously
    setTimeout(() => {
      const data = {
        message: "Data fetched successfully",
        result: [1, 2, 3, 4, 5],
      };
      // Resolving the Promise with the fetched data
      resolve(data);
      // If there's an error, reject the Promise
      // reject(new Error("Failed to fetch data"));
    }, 2000); // Simulating a delay of 2 seconds
  });
}

// Using the Promise
fetchData()
  .then((data) => {
    console.log("Data received:", data);
    // Do something with the received data
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    // Handle the error
  });
