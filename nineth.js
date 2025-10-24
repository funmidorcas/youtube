//sort() = method to sort elements of an array in place. Sorts element as strings in lexicographic order,not alphabetical
// lexicographic = (alphabet + numbers + symbols) as strings

let fruits= ["apple", "orange", "banana", "coconut", "pineapple", ]
// fruits.sort()
fruits.sort((a, b) => a.localeCompare(b));     // to compare word letters of string
console.log(fruits);

// for numbers sorting
let numbers = [1,10, 2, 9,3, 8,4, 7, 5,6,]
 numbers.sort((a, b) => b - a)
 console.log(numbers)
 numbers.sort((a, b) => a - b)
 console.log(numbers)

 const people = [
        {name: "roy", age: 30, gpa: 3.0},
        {name: "tony", age: 37, gpa: 1.5},
        {name: "mia", age: 31, gpa: 4.0},
        {name: "ann", age: 25, gpa: 5.0},
 ]
 console.log(people[1].age)
 people.sort((a, b)=> a.age - b.age)
 console.log(people)

 people.sort((a, b)=> b.gpa - a.gpa)
 console.log(people)

 people.sort((a, b)=> a.name.localeCompare(b.name))
 console.log(people)  // ann comes first


 //shuffle an array //fisher- yates shuffle
const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {                                    // decrement arrangement for 'for loop'
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
}

shuffle(cards);
console.log(cards);  


//Date objects = objects that contain values that represent dates and times. These date objects can be changed and formatted

const date = new Date()        // Date is a built in class and new call the class as in constructor

console.log(date)

// (year,month, day, hr, min, s ms(optional))
const dates = new Date(2024, 0, 1, 2,3,4,5)        // month start fron 0, jan = 0, dec =11

console.log(dates)

// or pass time in figures for word
const dater = new Date("2025-10-22T12:54:00.00Z");
console.log(dater.toDateString());
console.log(dater.toLocaleString());
console.log(dater.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
}));

const datee = new Date(0)
console.log(datee)

const year= date.getFullYear()
const month= date.getMonth()
const day= date.getDate()
const hour= date.getHours()
const min= date.getMinutes()
const sec= date.getMinutes()
const dayOfWeek = date.getDay()

console.log(year)
console.log(month)
console.log(day)
console.log(hour)
console.log(min)
console.log(sec)
console.log(dayOfWeek)

// or with date object set date with the method
date.setFullYear(2024)
date.setMonth(0)
date.getDate(1)
date.getHours(2)
date.getMinutes(3)
date.getSeconds(4)
date.getDay()


console.log(date)

const date1 =  new Date("2023-12-31")
const date2 = new Date("2024-01-01")
// if(date2 > date1 ){
//   console.log("HAPPY NEW YEAR")
// } 
let result = date2 > date1 ? "happy new year" : "not a new year"
console.log(result)


// closure = A function defined inside of another function, the inner function has acces to the variables and scope of the outer function.
// allow for private variables and state maintenance. Used frequently in js frameworks: React,vue, angular

function createCounter(){
let count = 0
function increment(){
  count++
  console.log(`Count increased to ${count}`)
}
function getCount(){
  return count
}

return{increment, getCount}
}
const counter = createCounter()
counter.increment()
counter.increment()
counter.increment()

console.log(counter.getCount())

//example 2   so closure is to proctect work from getting alter 
function createGame(){
let score = 0
function increaseScore(points){
  score += points
  console.log(`+${points}pts`)
}
function decreaseScore(points){
  score -= points
  console.log(`-${points}pts`)

}
function getScore(){
  return score
}
return {increaseScore, decreaseScore, getScore}
}
const game =  createGame()
game.increaseScore(5)
game.increaseScore(6)
game.increaseScore(3)
game.decreaseScore(3)

