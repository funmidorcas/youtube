// number guessing game
const minNum =1
 const maxNum = 40
 const answer = Math.floor(Math.random() *(maxNum-minNum) +1)
 console.log(answer)

 let attempts = 0
 let guess
 let running = true

 while(running){
guess= prompt(`guess a number between ${minNum} -${maxNum}`)
guess = Number(guess)

    if(isNaN(guess) && guess === answer){    //isNaN() is a method to check if its a number
        console.log(`you got it right`)
        alert(`you guess right`)
        
    }else if(isNaN(guess) && guess < minNum || guess > maxNum ){
        console.log(`out of range`)

        alert(`out of range`)
    }
else{
    attempts++
    if(guess < answer){
        alert(`below, not a mathch`)
    }else if(guess >answer){
        alert(`too much`)
    }else{
        alert(`correct, its a match`)
    }




    // alert(`try again`)
}
break
 }

 //function lesson

 function save(name, age){
    console.log(`this is a function about me ${name} and my age: ${age}`)
 }
 save("funmi",23)

 function solve(x, y){
    // let result = x * y
    // return result
    //or
    return x * y
}
console.log(solve(2,3))

function isEven(number){
    // if(number % 2 === 0){   // % means if there is no reminder after divition
    //     return true
    // }else{
    //     return false
    // }  
    // same as below
    return number % 2 ===0 ? true: false
}
console.log(isEven(10))
console.log(isEven(11))
console.log(isEven(15))

function isValid(email){
// if(email.includes("@")) {
//     return "correct"
// }else{
//     return "not correct"
// }
 return email =  email.includes("@") ? "correct" : "not correct"
}
console.log(isValid("ade@gmail"))

//variable scope: where a variable is recognized and accessible (local vs global)
// variable can be declare inside functions eg below
// functions cant see inside another function but function use local variable first bfor global variable
// global can cause confusion incase of plenty code, so local in this case can be good 
let x = 6   // global vaiable and it will work inside functions
function get(){
    // let x = 1   // local variable
    console.log(x)
}
function gett(){
    // let x = 5    // local variable
    console.log(x)
}
get()
gett()

let box = document.querySelector("#textbox")
let faraheny = document.querySelector("#tofahrent")
let celcius = document.querySelector("#tocelcius")
let result = document.querySelector("#result")
let temp
box.textContent = box.style.color = "yellow"  //targeting the value css

 function convert(){
if(faraheny.checked){
    // result.textContent="You selected farahiet me"
  temp = Number(box.value)
  temp = temp * 9 / 5 + 32
  result.textContent = temp.toFixed(2) + ".F"  // .toFixed(1) : to decimal places as required
}
else if(celcius.checked){
  temp = Number(box.value)
  temp = (temp - 32) * (5/9)
  result.textContent = temp.toFixed(1) + ".c"

}
else{
    result.textContent="select a unit"
}
 }

 convert()


 // array is a variable like  structure that can hold more than 1 value
  
 let fruits = ["apple", "orange", "banana"]

 console.log(fruits[0])
 console.log(fruits[1])
 console.log(fruits[2])
//to add more items to the array
 fruits[3] = "coconut"
 console.log(fruits[3])
 fruits.push("mango") // add to the array at the back
 console.log(fruits)
fruits.pop() // remove item from the array at the back
 console.log(fruits)
fruits.unshift("cashew", "mango") //add to the front/start
 console.log(fruits)
fruits.shift() //remove from the front/start
 console.log(fruits)
console.log(fruits.length)
console.log(fruits.indexOf("apple"))
console.log(fruits.indexOf("carbage")) // gives -1 bcos it doesnt not exist
 for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
 }
 console.log("break line here")

 // to reverse an array
  for(let i=fruits.length -2; i >=0; i--){ // -2 will remove the 2 from the top reverse or as require or dont put it  if there is no need
    console.log(fruits[i])
 }

 console.log("break line here")

// shortcut to display array
for(let day of fruits){ // day here can be any word but in this position will show array item
    console.log(day)
}
 console.log("break line here")

// sort() for alpabetical arrangement 
// .reverse() does reverse arrangment
fruits.sort().reverse()
console.log(fruits)

//spread operator(...) allow an iteration i.e array/string to be expanded into seperate elements

let numbers = [1,2,3,4,5]
let maximum = Math.max(...numbers)  // the (...) means open the array and find maximum(Math.max())

let minimum = Math.min(...numbers)
console.log(maximum)
console.log(minimum)

let mark = "good boy"
// let marks = [...mark].join("-")
// console.log(marks)
console.log([...mark].join("-")) //.join() only work with array

let vegetables = ["carrot", "celery", "leaf"]
let foods = [...fruits, ...vegetables,  "eggs", "meat"]

console.log(foods)
 console.log("break line here")
//rest parameters: (...rest) is the opposite of spread operator(...).it allow a function with a variable number of arguments by bundling them into an array
// spread = expands an array into separate elements  // rest= bundles seperate elements into an array
function openfridge(...foods){
console.log(foods)
}
function getfood(){
    return foods
}
let food1 ="pizza"
let food2 ="hamburger"
let food3 ="hotdog"
let food4 ="sushi"

openfridge(food1,food2,food3,food4)
 console.log("break line here")

let foodlist = getfood(food1, food2, food3, food4 )
console.log(foodlist)

function sum(...numbers){
    let result = 0
    for (let number of numbers){
        result +=number
    }
    return result
}
const total = sum(1,2,3,4,5)
console.log(`your total is ${total}`)


function getsum(...numbers){
    let result = 0
    for (let number of numbers){
        result +=number
    }
    return result / numbers.length
}
const totall = getsum(75,100, 85,90,50)
console.log(`your total is ${totall}`)

function combinestrings(...strings){
    return strings.join(" ")
}

const fullname = combinestrings("mr.", "sponge", "squarepay", "III")

console.log(fullname)

// dice roller game

function rolldice(){
    const numofdice = document.getElementById("numofdice").value
const diceresult = document.getElementById("diceresult")
const diceimages = document.getElementById("diceimages")
const values = []
const images = []

for(let i =0; i < numofdice; i++){
    const value = Math.floor(Math.random() * 7)
values.push(value)
images.push(`<img src="img/${value}.png" alt="dice ${value}">`)

}
diceresult.textContent =`dice: ${values.join(", ")}`
diceimages.innerHTML = images.join(" ")
}