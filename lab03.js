
// 1: The iterable protocol
const arr = [1, 2, 3, 4, 5]
console.log(...arr)   // output: 1 2 3 4 5

// generator function
/* syntax: function* name([param, [param, [param ,...]]]){
    statements
} 
use next() method to return value of node data*/

function* generatorFunc(index){
    yield index;
    yield ++index;
}

let iterator = generatorFunc(0)
console.log(iterator.next())  // output: {value: 0, done: false}
console.log(iterator.next())  // output: {value: 1, done: false}
console.log(iterator.next())  // output: {value: undefined, done: true}

function* generate2Expo(index){
    while(index < 100){
        yield index;
        index *= 2
    }
}

iterator = generate2Expo(1);
for(let i=0; i<3; i++){
    console.log(iterator.next())
}

// generator object
const user1 = {
    id: 1,
    name: 'Duc',
    age: 21,
    city: 'Hanoi'
}

user1[Symbol.iterator] = function* (){
    yield this.id
    yield this.name
    yield this.age
    yield this.city
}
console.log(...user1)  // output: 1 Duc 21 Hanoi

// Array in JS
const a = [1, 2, 3]
// Shallow Copy
var b = a
b[1] = 5
console.log("Array a: " + a)  // output: 1,5,3
console.log("Array b: " + b)  // output: 1,5,3
console.log(a)

