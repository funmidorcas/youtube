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
box.textContent = box.style.color = "red"