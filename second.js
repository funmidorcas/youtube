//method chaining = calling one method after another in one continous line of code 
// let username = prompt(`ender your username`)
 // no method chaining
let username = "    joHn wekg  "
 username = username.trim()
 let letter = username.charAt(0)
 letter = letter.toUpperCase()
  let others = username.slice(1)
  others = others.toLowerCase()
  username = letter + others
  console.log(username)

  // method chaining = write more method on the same line
  username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase()
  console.log(username)

  //logical operators = and =&&, or == ||, not = !

  let temp = -250
   if(temp > 0){
    console.log("weather is good")
   } else if(temp <= 30){
        console.log("weather is average")

   }else {
    console.log("better")
   }

// if(temp > 0 && temp <= 30){
if(temp <= 0 || temp > 30){
      console.log("weather is good")
  
}else{
        console.log("weather is bad")

}
const issunny = false
if(issunny){
    console.log("about to rain")
}
else if(!issunny){
    console.log("about to snow")
}

// = its for assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values $ datatype are equal)
// != inequality operator 
// !== strict inequality operator

let pi = 3.14
 let message   = pi !== 3.14 ? "correct" : "not correct"

console.log(message)

// while loop = repeat some code whiles some condition is true or while this condition is  correct run the condition
let userName = " "

//  while(userName === " "){
//     console.log(`you are correct`)
//     console.log(`you are correct`)
//     console.log(`you are correct`)
// break
//  }

// while (userName === " ") { 
//   userName = prompt("Enter your name ")
// }
while (userName === " " || userName === null) { 
  userName = prompt("Enter your name ")
}

console.log(`Your name is  ${userName}`)
// while loop will continue as long as the condition is correct
 
//chatgbt example
let count = 1;
 while (count <= 5) {
  console.log("Count is: " + count);
  count++;
}

// while (count <= 5) {
//   if (count === 3) {
//     console.log("Count is three");
//   } else if (count % 2 === 0) {
//     console.log("Even number");
//   } else {
//     console.log("Other number");
//   }

//   count++;
// }    //end of chatgbt

// do while loop means do this first, then check the condition
let minename
do{
    minename = prompt("enter your name here")
} while(minename === "" || minename === null)
console.log(`your name is ${minename}, thanks`)

// let loggedin = false
// let usename 
// let password 
// while(!loggedin){
//     usename = prompt(`enter your username here`)
//     password = prompt(`enter your password here`)
// if(usename === "myUsername" && usename === "myPassword"){
//     loggedin = true 
// console.log(`you are log in`)
// }else{
//     console.log(`not correct info`)
//     break
// }
// }
   //  do while
   do{
    usename = prompt(`enter your username here`)
    password = prompt(`enter your password here`)
if(usename === "myUsername" && usename === "myPassword"){
    loggedin = true 
console.log(`you are log in`)
}else{
    console.log(`not correct info`)
    break
}
}while(!loggedin)


    //for loop = repeat some code a limited amount of times
   
    for(let i = 20; i >= 0; i-=2){
console.log(i)
    } 
    for(let i = 1; i <= 20; i++){
if(i == 13){
    continue   // continue is keyword like break. it is use to skip line or point 
 }

console.log(i)
    } 
