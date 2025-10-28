// Add & change HTML in js

// step  1 create the element, (we wil create h1)
const newh1 = document.createElement("h1")


// step 2 add attributes/properties
newh1.textContent = "I like pizza"
newh1.id = "myH1"
newh1.style.color = "tomato"
newh1.style.textAlign = "center"

//step 3 append element to dom, to place it in the begining of body we use .prepend(), last = .append()
// document.body.append(newh1)                                 // add newh1 to the last in the body 
document.getElementById("box").prepend(newh1)           // to add it to our own specific location

// step 4(if need be) remove html element
document.getElementById("box").removeChild(newh1)                 // to remove it to from own specific location


// another methods

// const box2  = document.getElementById("box2")
// insertBefore(newElement, currentElement) i.e insert new1 before box2        // to add it to our own specific location
// document.body.insertBefore(newh1, box2)    
// document.body.removeChild(newh1)                                               // to remove it to from body

 // or

//  const boxes = document.querySelectorAll(".box")
//  document.body.insertBefore(newh1, boxes[1])
// document.body.removeChild(newh1)

// example 2

const newfruit = document.createElement("li")
newfruit.textContent = "coconut"
newfruit.id = "coconut"
newfruit.style.fontSize = "2rem"
newfruit.style.background = "green"

// document.body.append(newfruit)
// document.getElementById("fruits").prepend(newfruit)
// const orange =document.getElementById("orange")
const mango =document.getElementById("mango")
document.getElementById("fruits").insertBefore(newfruit,mango)
// document.getElementById("fruits").removeChild(newfruit)


//mouse event in js   eventlistener can be more than 1 on an item
//eventListener = listen for specific events to create interactive web pages
// events like click, mouseover, mouseout. eg .addEventListener(event, callback/function/arrow function)
const myBox = document.getElementById("myBox")
myBox.style.transition = "0.5s"
const button = document.getElementById("button")

// function changecolor(){
// event.target.style.background = "tomato"
// event.target.textContent = "OUCH!🤥"
// eve
// }
// myBox.addEventListener("click", changecolor)
// or
myBox.addEventListener("click", function(event){
event.target.style.background = "tomato"
event.target.textContent = "OUCH!🤥"

})

//it can be control by button too as required
// button.addEventListener("click", function(event){
// myBox.style.background =  "tomato"
// myBox.textContent =  "OUCH!🤥"

// })
myBox.addEventListener("mouseover", event =>{
event.target.style.background = "yellow"
event.target.textContent = "Dont do it!🤥"

})
myBox.addEventListener("mouseout", event => {
event.target.style.background = "red"
event.target.textContent = "Hello!"

})

// keydown, keyup eventlistener lesson
const emoji = document.getElementById("emoji")

document.addEventListener("keydown", event =>{
    emoji.textContent = "❤️"
    emoji.style.background = "yellow"
})
document.addEventListener("keyup", event =>{
    emoji.textContent = "😎"
    emoji.style.background = "green"
})
 
const moveAmount = 10
let x = 0
let y = 0


document.addEventListener("keydown", event =>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault()

        switch(event.key){
            case "ArrowUp":
            y -= moveAmount;
            break;
            case "ArrowDown":
            y += moveAmount;
            break;
            case "ArrowLeft":
            x -= moveAmount;
            break;
            case "ArrowRight":
            x += moveAmount;
            break;
        }
        emoji.style.top = `${y}px`;
        emoji.style.left = `${x}px`;

    }
})

document.getElementById("boxx").innerHTML = "<h2>Hello</h2><p>This is a paragraph</p>";
