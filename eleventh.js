// both the import codes works well but quokka cannot read it with another code

//ES6 = An external file that contains reuseable code that can be imported into other Javascript files. Write reuseable code for many different apps. can contain variabls, classes, functions etc.introduced as part of ECMAScript 2015 update
// import {pi, nickname, getcircle, getArea,getVolume} from  "./export.js";
// console.log(pi)
// console.log(nickname)
// console.log(getcircle())
// console.log(getArea(10.toFixed(1)))
// console.log(getVolume(5).toFixed(3))

// or import everting at once like this bellow. * means everthing with export keyword
// import * as mymodule from  "./export.js";
// console.log(mymodule.pi)
// console.log(`${mymodule.nickname} genius herself`)
// console.log(`${mymodule.getcircle().toFixed(2)}cm`)
// console.log(mymodule.getArea(10).toFixed(1))
// console.log(mymodule.getVolume(5).toFixed(3))


//synchronous = excute line by line consecutively in a sequential manner. Code that waits for an operation to complete.

//asynchronous = Allows multiple operations to be performed concurrently without waiting. doesnt block the execution flow and allows the program to continue
//found in operations, mettwork requests, fetching data. Handled with: events, callbacks, promises, Async/Await
// Asynchronous code allows JavaScript to continue running other tasks while waiting for a long operation to finish. It prevents blocking the program.

//example of synchronous code
console.log("task 1")            // they run one after the other
console.log("task ")
console.log("task 3")

//example of asynchronous code  its simply write code in such a way that dey dont have to wait for each other

function func1(callback){
    setTimeout(() => {console.log("task 4")
       callback(),3000 
    })
}
function func2(){
console.log("task 5")   
console.log("task 6")
console.log("task 7")
}
func1(func2)


//error = An object that is created to represent a problem that occurs.Occur often with user input or estabishing a connection
// error handling method below try{} after catch (error){}, then (opttional) finally{}
// try {write potential error likeable code here } = enclose code that might potentially cause an error
//catch (){} = catch & handle any thrown errors from try {}
// finally{} = (optional), always executes.Used mostly for clean up ex, close files, close connections, release resources
try{
    console.log(boy)
    //network errors, promise errors, security error can be here
}
catch(error){
    console.log(error)  //or
    // console.error(error)
}
finally{
    console.log("this too will run")
 // close files, close connections, release resources
}
console.log("i am unstoppable line")  // now all other code will run 

try{
    // const dividend = Number(prompt("enter a number"))
    // const divider = Number(prompt("enter another number"))
    if(divider == 0){
        throw new Error("you cant divide by zero")
    }
    if(isNaN(dividend) || isNaN(divider)){
        throw new Error("values mst be a number")
    }
    const result = dividend / divider
    console.log(result)
}
catch(error){
    console.log(error)
}
console.log(" i run well")


// DOM lesson
console.dir(document)   // it will show all the  properties of the word document
 console.error("it show error message board")
 console.log("pupolar/normal")

//since i av link this js file with html
// document.body.style = "background:hsl(0, 0%, 15%);"  //or
document.body.style.background = "hsl(0, 0%, 15%)";
document.body.style.fontSize = "24px";
const username = " funmitedev"
const message = document.getElementById("message")

// message.textContent += username === ""   ? " guest" : username
if(username === ""){
    message.textContent += " guest"          // += means join with what it is there
}else{
    message.textContent += username
}
const fruits = document.getElementsByClassName("study")
// fruits[0].style.background = "yellow"
// fruits[1].style.background = "orange"
// fruits[2].style.background = "blue"   // or

for(let fruit of fruits){
fruit.style.backgroundColor = "red"
}

let pelets = document.getElementsByTagName("p")
Array.from(pelets).forEach(pelet =>{
pelet.style.backgroundColor = "blue"

})

//DOM Navigation  lesson we have
//  .firstElementChild, .lastElementChild, .nextElementSibling, .previousElementSibling, .parentElement, .children
const fruit = document.getElementById("fruit")
const firstfruit = fruit.firstElementChild
const lastfruit = fruit.lastElementChild
const nextfruit = fruit.nextElementSibling
const prevfruit = fruit.previousElementSibling
const applechild = document.getElementById("apple")
const appleparent = applechild.parentElement


firstfruit.style.background = "yellow"
lastfruit.style.background = "coral"
nextfruit.style.padding = "100px"
prevfruit.style.margin = "100px"
appleparent.style.background = "white"


const ulItem = document.querySelectorAll("ul")
ulItem.forEach(function(ul){
    const allUl = ul.firstElementChild
    allUl.style.color = "red"
    const allfruit = ul.lastElementChild
 allfruit.style.color = "orange"

})
//.children
const desert = document.getElementById("desert")
const desertchild = desert.children
Array.from(desertchild).forEach(child =>{
    child.style.background = "white"

})
// or
desertchild[1].style.color = "blue"