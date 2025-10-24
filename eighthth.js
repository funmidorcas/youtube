// destructuring = extract values from arrays and objects, then assign them to variables in a convenient way,  [] = to perform arrray destructuring, {} = to perform object destructuring

// example 1: swap the value of two variables

let a = 1;
let b  = 2;
[a, b] = [b,a] 
console.log(a)
console.log(b)
// example 2 swap 2 element in array
const colors = ["red", "green", "blue", "black", "white"];      // i think it requires  this at the back of codes ';' bfor it will run

// [colors[0], colors[4], colors[3]] = [colors[3], colors[4], colors[0]]            //this means the ones you want to swap and make it/'=' how you want it
// console.log(colors);
[colors[0], colors[4]] = [colors[4], colors[0]]            //bro code own
console.log(colors)

// example 3 assign array elements to variable
const [firstcolor, secondcolor, thirdcolor, ...extracolors] = colors;

console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolors);
//example 4 extract values from objects

const person1 = {
    firstname: "mark",
lastname : "ann",
 age : 34,
};
const person2 = {
    firstname: "john",
lastname : "stone",
 age : 45

};
const {firstname,lastname, age, job="unemployed"} = person2;
console.log(firstname)
console.log(lastname)
console.log(age)
console.log(job)

//example 5 destucture in function parameters

function displayPerson({firstname,lastname, age, job="employed"}){
    console.log(`name: ${firstname} ${lastname}`);
    console.log(`age: ${age}`)
    console.log(`job: ${job}`)
}

displayPerson(person1)

// nested objects = objects inside of other objects.Allows you to represent more complex data structures. Child object is enclosed by a Parent object
// person{Address{}, ContactInfo{}}
// shoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const person ={
    fullname : "taylor stone",
    age: 30,
    isStudent : true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 conch st",
        city: "london",
        country: "UK"
    }
}
console.log(person.fullname)
console.log(person.age)
console.log(person.hobbies)
console.log(person.hobbies[2])    // go into the array items
console.log(person.address)
console.log(person.address.city)  // to enter into the object of address

for(const property in person.address){         // this is for ... in  loop
    console.log(person.address[property])
}

// example 2 parent and child object
class Person{
     constructor(name,age, ...address){          //parent object to Address        //...address is a spread operator that says add/spread all the Address element too
        this.name = name
        this.age = age
        this.address = new Address(...address)
     }
}
 class Address{                              // child to Person
    constructor(street, city, country){
        this.street = street
        this.city = city
        this.country = country
    }
 }
 const person3  = new Person("jeff", 25, "123 camp st", "ib","Uk")
 console.log(person3)
 const person4  = new Person("ruth", 27, "56 camp st", "ib","Uk")
 console.log(person4.address.city)
 console.log(person4.age)
 console.log(person4.address.country)
  console.log(person4)


  //  Arrays of objects
  const fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "mango", color: "green", calories: 37}
  ]
console.log(fruits[0].name)
console.log(fruits[3].name)
console.log(fruits[2].calories)
console.log(fruits[1].color)
fruits.push({name: "lemon", color: "lemon", calories: 7})
console.log(fruits)
console.log(fruits[5].color)
fruits.pop()
console.log(fruits)
// console.log(fruits.splice(1,2))

// example 2 with forEach()
fruits.forEach(fruit => console.log(fruit.calories))

// example 3 with map()
const fruitNames = fruits.map(fruit => fruit.name)
const fruitColors = fruits.map(fruit => fruit.color)
console.log(fruitNames)
console.log(fruitColors)
 
// filter()
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow")
const localFruits = fruits.filter(fruit => fruit.calories < 100)
const highFruits = fruits.filter(fruit => fruit.calories >= 100)
console.log(yellowFruits)
console.log(localFruits)
console.log(highFruits)
  
// reduce()

const maxFruit = fruits.reduce((max, fruit) =>
     fruit.calories > max.calories ? fruit : max)
console.log(maxFruit)
const minFruit = fruits.reduce((min, fruit) =>
     fruit.calories < min.calories ? fruit : min)
console.log(minFruit)