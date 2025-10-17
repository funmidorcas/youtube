//this = reference to the object where This is used (the object depends on the immediate context) i.e person.name is same as this.name

const person1 = {
    name: "jack",
    favfood: "rice",
    sayHi: function () {console.log(`Hi! i am ${this.name}!`)},
    eat: function() {console.log(`${this.name} is eating ${this.favfood}`)}
}  // arrow function doesnt not have "this" so use normal function instead in a case like this or more
person1.sayHi()
person1.eat()

const person2 = {
    name: "sam",
    favfood: "beans",
    sayHi: function () {console.log(`Hi! i am ${this.name}!`)},
    eat: function() {console.log(`${this.name} is eating ${this.favfood}`)}
}  // arrow function doesnt not have "this" so use normal function instead in a case like this or more
person2.sayHi()
person2.eat()

// constructor = special method for defining the properties and methods of objects

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`you drive the ${this.model}`)}
}
const car4 = new Car("jeep", "suv", 2020, "yellow")
const car5 = new Car("BMW", "muscle", 2022, "black")

console.log(car4.make)
console.log(car4.model)
console.log(car4.year)
console.log(car4.color)
car5.drive()


// class = (Es6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions
// ex, static, keyword, encapsulation, inheritance 

class Product{                                // class is like setting a formular  that will work for many response/input i.e it can be reuseable 
constructor(name, price){                     // constructor is like when we give argument to a function but it also state that use this to solve problems
    this.name = name
    this.price = price
}

displayProduct(){                                 // this is a function but we dont us the word 'function' inside a class
console.log(`Product: ${this.name}`)
console.log(`Price: $${this.price}`)
}
}

const product1 = new Product("shirt", 19.99)            // new means take this value and run the class code with it. i.e  run 'class Product' using   new  Product value
const product2 = new Product("top", 30.99) 
product1.displayProduct()                             // invoke it/call the function
product2.displayProduct()

















// const car1 = {
//     make: "ford",
//     model: "mustang",
//     year: 2024,
//     color: "red",
//     drive: function(){console.log(`you drive thr ${this.model}`)}
// }
// const car2 = {
//     make: "benz",
//     model: "gle",
//     year: 2025,
//     color: "white",
//     drive: function(){console.log(`you drive thr ${this.model}`)}
// }
// const car3 = {
//     make: "toyota",
//     model: "venva",
//     year: 2023,
//     color: "gray",
//     drive: function(){console.log(`you drive thr ${this.model}`)}
// }
