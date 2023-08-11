function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate fetching data from a server
      setTimeout(() => {
        const data = { message: "Hello from the Promise world!" };
        // Simulating a successful response
        resolve(data);
        // Simulating an error response
        // reject("Oops! Something went wrong.");
      }, 2000);
    });
  }
  
  fetchData()
    .then(data => {
      console.log(data.message);
    })
    .catch(error => {
      console.error(error);
    });
  
  console.log("Fetching data using Promises...");
  