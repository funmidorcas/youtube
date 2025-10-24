// .reduce() = reduce the elements of array to a single value

const prices = [5,30,10,25, 15, 20]

const total = prices.reduce(sum)
console.log(`$${total.toFixed(2)}`)

function sum(accumulator, element){  // accumulator position means pick the first figure, add it to the nex element/number and continue adding till last number/element
 return accumulator + element        // 5 + 30 =35, 35 + 10 =45 and continue till last number
}

//example 2

const grades = [75, 50, 90, 80, 65, 95]

const maximun = grades.reduce(getMax)
console.log(maximun)
const minimun = grades.reduce(getMin)
console.log(minimun)

function getMax(accumulator,element){
    return Math.max(accumulator, element)
}
function getMin(accumulator,element){
    return Math.min(accumulator, element)
}

// function declaration = define a reusable block of code that performs a specific task
 function done(){
    console.log("hello") //this is a common function declaration
 }
 done()
// function expressions = a way to define function as values or variable

const hello = function(){      // define function expressions as a value
    console.log("hello")
}
hello()

// example of function declaration and another way to set it as an argument
 function newAge(){
    console.log("hello") // take 3000ms to come up
 }
setTimeout(newAge, 3000)  
// now set function expression as an argument
setTimeout(function(){
    console.log("i am here")
}, 3000)
//example
const numbers = [1,2,3,4,5,6]
const squares = numbers.map(square)
console.log(squares)
function square(element){
return Math.pow(element,2)
} 
// or use this method and this method doesn't take function name again
const squared = numbers.map(function(element){
return Math.pow(element,2)
} 
)
console.log(squared)

//example 2

const cubes = numbers.map(function(element){
    return Math.pow(element,3)
})
console.log(cubes)

// passing function expression in .map(), .filter(), etc
const filter = numbers.filter(function(element){
    return element > 1
})
console.log(filter)

const map = numbers.map(function(element){
    return Math.pow(element, 3)
})
console.log(map)

const reduce = numbers.reduce(function(accumulator, element){
    return accumulator + element
})
console.log(reduce)


// arrow functions = a consise way to write function expressions good for simple functions that you use only once, i.e (parameters) => some code

function example(){  // this is a common function declaration
    console.log("hello world")
}
example()
setTimeout(example, 2000)
// arrow function now

const examples = (name, age) => console.log(`hello ${name} i am  ${age} old`)
examples("mark", 20)

setTimeout(()=>{
console.log("can you see me")
}, 2000)

const digits = [1,2,3,4,5,6]
const double = digits.map((element)=>{ return Math.pow(element,2)})
console.log(double)

const filt = digits.filter((element)=>{ return element % 2 === 0})
console.log(filt)

const reduced = digits.reduce((accumulator, element)=>{ return accumulator * element })
console.log(reduced)


//objects = a collection of related properties and/or methods, Can represent real world objects (people, products, places)
// i.e object = {key:value, function()}

const person1 = {
    firstName: "mark",
    lastName: "ann",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("hi! i am mark!")},
    sayBye: function(){console.log("goodbye!")}
}

const person2 = {
    firstName: "john",
    lastName: "mia",
    age: 42,
    isEmployed: false,
    sayHello: () => {console.log("hi! i am john!")},
     sayBye: () => {console.log("bye....")}
}

console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.isEmployed)
person1.sayBye()
person2.sayHello()



