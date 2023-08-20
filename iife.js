(function() {
    // This code will be executed immediately
    var message = "Hello from inside the IIFE!";
    console.log(message);
  })(); // The parentheses at the end invoke the function immediately

  
  var counterModule = (function() {
    var count = 0; // Private variable
  
    function increment() {
      count++;
      console.log("Count:", count);
    }
  
    function decrement() {
      count--;
      console.log("Count:", count);
    }
  
    return {
      increment: increment,
      decrement: decrement
    };
  })();
  
  counterModule.increment(); // Output: Count: 1
  counterModule.increment(); // Output: Count: 2
  counterModule.decrement(); // Output: Count: 1
  