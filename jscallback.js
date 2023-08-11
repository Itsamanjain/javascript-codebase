function fetchData(callback) {
  // Simulate fetching data from a server
  setTimeout(function() {
    const data = { message: "Hello, coder Aman!" };
    callback(data);
  }, 2000); // Simulating a delay of 2 seconds
}

function processData(data) {
  console.log(data.message);
}

fetchData(processData);
console.log("Fetching data...");
