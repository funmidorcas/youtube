// random pasword generator

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numberChars = "0123456789"
const symbolChars ="!@#$%^&*()_-+="

let allowedChars = ""
let password = ""


allowedChars += includeLowercase ? lowercaseChars : ""
allowedChars += includeUppercase ? uppercaseChars : ""
allowedChars += includeNumbers? numberChars : ""
allowedChars += includeSymbols ? symbolChars : ""

if(length <= 0){
    return `(passord length must be at least 1)`
}
if(allowedChars.length === 0){
    return `(At least 1 set of character needs to be selected)`
}
for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length)
    password += allowedChars[randomIndex]

}

return password

}
const passwordLength = 10
const includeLowercase = true
const includeUppercase = true
const includeNumbers = true
const  includeSymbols = true

const password = generatePassword(passwordLength,
                                   includeLowercase,
                                   includeUppercase,
                                   includeNumbers, 
                                   includeSymbols
                                )     

  console.log(`generated password: ${password}`)



  // callback = a function that is passed as an argument to another function.it is used to handleasynchronous operations: reading a file, network request, interacting with databases i.e "Hey,when you are done, call this next"


  function check(){
    console.log("hello world")
  }
   check()   //this means callback function

  function hello(callback){
    console.log("hello everyone")
    callback()

  }
  hello(leave) 
  hello(goodbye) 

  function goodbye(){
    console.log("good bye")
  }
function leave(){
      console.log("leave now")

}

function sum(callback, x, y){
 let result = x + y
 callback(result)
}
sum(displayConsole, 1,2)
sum(displayresult, 1,2)
function displayConsole(result){
  console.log(result)
}

function displayresult(result){
document.getElementById("result").textContent= result
}

//forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element 
//array.forEach(callback)
// element, index, array are provided 

let numbers = [1,2,3,4,5]
numbers.forEach(show)

function show(list){
console.log(list)
}

function double(list, index, array){
  array[index] = list * 2
}
numbers.forEach(double)
console.log(numbers)

function square(list, index, array){
array[index] = Math.pow(list, 2)
}
numbers.forEach(square)
console.log(numbers)

function cube(list, index, array){
array[index] = Math.pow(list, 3)
}
numbers.forEach(cube)
console.log(numbers)

// example 2
let fruits = ["apple", "orange", "banana", "coconut"]

fruits.forEach(upperCase)
fruits.forEach(lowerCase)
fruits.forEach(capitalize)
fruits.forEach(display)

function  display(element){
  console.log(element)
}

function upperCase(element, index, array){
array[index] = element.toUpperCase()
}
function lowerCase(element, index, array){
array[index] = element.toLowerCase()
}


function capitalize(element, index, array){
 array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}


//.map() = accepts a callback and applies that function to each element of an array, then return a new array

const number = [1,2,3,4,5,]
// const squares = number.map(square)
// console.log(squares)

const cubes = number.map(cube)
console.log(cubes)

function square(element){
  return Math.pow(element,2)
}
function  cube(element){
  return Math.pow(element,3)
}
//example 2
const students = ["john", "mark", "ann", "mia"]

const studentsUpper = students.map(upperCase)
console.log(studentsUpper)

const studentLower = students.map(lowerCase)
console.log(studentLower)

function upperCase(element){
  return element.toUpperCase()
  // return element.split("").join("-")
}

function lowerCase(element){
  // return element.toLowerCase()
  return element.split("").join("-")
}
//example 3
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"]

// function formatDate(element){
// return element.split("-").join("/")
// }

// const formatDates = dates.map(formatDate)
// console.log(formatDates)  // worked but not the tutor plan

 const formatDates = dates.map(formatDate)
function formatDate(element){
 const part = element.split("-") // i.e split when you see -
return `${part[1]}/${part[2]}/${part[0]}`
}
console.log(formatDates)  


//.filter() = creates a new array by filtering out elements

let num = [1,2,3,4,5,6,7]
  let  evenNum = num.filter(isEven) // it will filter/erase any number/element that is not true/correct with our function
  console.log(evenNum)
  let  oldNum = num.filter(isOdd) // it will filter/erase any number/element that is not true/correct with our function
  console.log(oldNum)
  function isEven(element){
    return element % 2 === 0 // divide by 2 and ans strictly remain 0
  }
  function isOdd(element){
    return element % 2 !== 0 
  }

  //example 2: find adult and children from ages

  const ages = [16,17, 18,18,19, 20, 60]
const adult = ages.filter(isAdult)
console.log(adult)
const children = ages.filter(isChild)
console.log(children)


  function isAdult(element){
    return element >= 18
  }

  function isChild(element){
    return element <= 17
  }

  // example 3

  const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"]
 
  const shortWords = words.filter(getShortWords)
 console.log(shortWords)

  const longWords = words.filter(getLongWords)
 console.log(longWords)
 
 function getShortWords(element){
    return element.length <= 6
    
  }
 function getLongWords(element){
    return element.length > 6

  }
