console.log("Welcome to Basic Nodejs");

// Handle array, string
let a = [1, 2, 3, 4, 5]
let b = [6, 7, 8, 9, 10]

// concat(): concat 2 array or 2 string
console.log(a.concat(b)) // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// copyWithin(): copies array elements within the array
// entries(): return a key/value pair Array Iteration Object
const object1 = {
    a: 'somestring',
    b: 42
  };
  
for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
} // output: a: something
  //         b: 42

// every(): check if every element pass a test
const isBelowThreshold = (n) => n <= 5 

console.log(a.every(isBelowThreshold)) // output: True
console.log(a.every((element) => {return element <=5 })) // output: true
console.log(a.every((element, index, array) => {return element <=5 })) // output: true
// check if array a is subset of array b
console.log(a.every((element) => {return b.includes(element)})) // output: false

// fill(): fill an array with static value from index start to end
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 0, 3) 
console.log(arr) // output: [1, 1, 1, 4, 5]

// filter(): create new array with every element pass a test
console.log(b.filter((element) => {return element > 7})) // output: [8, 9, 10]

// find(): return the value of first element in array pass a test
// findIndex(): same as find() but return a value
// forEach(): call a function for each array element
const toString = (n) => {
    console.log("value is: " + n)
} 
a.forEach(toString)  /* output: value is: 0
                                value is: 1
                                value is: 2
                                value is: 3
                                value is: 4   */

// FormData 
const FormData = require('form-data')
const form = new FormData();
// append()
form.append("temperature", 35)
form.append("humidty", "70%")
form.append("windy", "5m/s")
form.append("rainy possibility", "25%")
console.log(form)
// delete()

// entries()


