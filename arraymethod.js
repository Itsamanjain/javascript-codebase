// Create an array
let myArray = [1, 2, 3, 4, 5];

// Array methods examples
console.log("Original Array:", myArray);

// 1. Array.prototype.push()
myArray.push(6);
console.log("After push(6):", myArray);

// 2. Array.prototype.pop()
let poppedElement = myArray.pop();
console.log("After pop():", myArray);
console.log("Popped Element:", poppedElement);

// 3. Array.prototype.unshift()
myArray.unshift(0);
console.log("After unshift(0):", myArray);

// 4. Array.prototype.shift()
let shiftedElement = myArray.shift();
console.log("After shift():", myArray);
console.log("Shifted Element:", shiftedElement);

// 5. Array.prototype.splice()
myArray.splice(2, 0, 2.5);
console.log("After splice(2, 0, 2.5):", myArray);

// 6. Array.prototype.slice()
let slicedArray = myArray.slice(2, 5);
console.log("Slice(2, 5):", slicedArray);

// 7. Array.prototype.concat()
let newArray = myArray.concat([6, 7]);
console.log("Concat([6, 7]):", newArray);

// 8. Array.prototype.indexOf()
let index = myArray.indexOf(4);
console.log("Index of 4:", index);

// 9. Array.prototype.includes()
let includes = myArray.includes(3);
console.log("Includes 3:", includes);

// 10. Array.prototype.join()
let joinedString = myArray.join("-");
console.log("Joined with '-':", joinedString);

// 11. Array.prototype.reverse()
myArray.reverse();
console.log("After reverse():", myArray);

// 12. Array.prototype.sort()
myArray.sort();
console.log("After sort():", myArray);

// 13. Array.prototype.filter()
let filteredArray = myArray.filter((element) => element > 3);
console.log("Filter elements > 3:", filteredArray);

// 14. Array.prototype.map()
let mappedArray = myArray.map((element) => element * 2);
console.log("Map elements * 2:", mappedArray);

// 15. Array.prototype.reduce()
let sum = myArray.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of array:", sum);

// 16. Array.prototype.forEach()
myArray.forEach((element) => console.log("forEach:", element));
