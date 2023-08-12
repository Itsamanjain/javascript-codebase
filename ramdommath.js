const randomNum = Math.floor(Math.random() * 1000) + 1;
console.log("Random Number:", randomNum);



const num = 5.67;
const roundedNum = Math.round(num);
console.log("Rounded Number:", roundedNum); // Output: 6






const numbers = [10, 25, 8, 45, 3];
const maxNum = Math.max(...numbers);
const minNum = Math.min(...numbers);
console.log("Maximum Number:", maxNum); // Output: 45
console.log("Minimum Number:", minNum); // Output: 3


const negativeNum = -15;
const absoluteValue = Math.abs(negativeNum);
console.log("Absolute Value:", absoluteValue); // Output: 15


const base = 2;
const exponent = 3;
const result = Math.pow(base, exponent);
console.log("Result:", result); // Output: 8






console.log(2 + '2' -1);
console.log(22-"1")
console.log(22 + "1");