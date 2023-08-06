const os = require("os");
console.log(os.cpus().length);


// blocking(sync) and non blocking(async) request 

// request --> event queue --> event loop --> blocking/non blocking opeeration 
// if non blocking then it give response and if it is blocking then it go to thread pool and after that response come.