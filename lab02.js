console.log("Welcome to Basic Nodejs")

// Prototype
const myObject = {
    name: 'VoQuangDuc',
    age: 21,
    height: 170,
    introduce(){
        console.log(`My name is ${this.name}`)
    }
}

let obj = Object.create(myObject)

obj.introduce()   // output: My name is VoQuangDuc
console.log(obj.name)
console.log(Object.getPrototypeOf(obj))

// TypeOf
let a = 12;
console.log(typeof(a))  // output: 