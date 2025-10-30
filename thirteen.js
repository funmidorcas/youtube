// Hide/show HTML

const myButton = document.querySelectorAll(".mybutton")
const myImg = document.querySelectorAll(".myimg")

// for single button
// myButton.addEventListener("click", () => {
//  if(myImg.style.visibility === "hidden"){
//     myImg.style.visibility = "visible"
//     button.textContent = "Hide"
//  }else{
//         myImg.style.visibility = "hidden"
//     button.textContent = "Show"

//  }
// })


myButton.forEach(function(button, i){
button.addEventListener("click", () => {
 if(myImg[i].style.visibility === "hidden"){
    myImg[i].style.visibility = "visible"
    button.textContent = "Hide"
 }else{
        myImg[i].style.visibility = "hidden"
    button.textContent = "Show"
 }
})
})

//NodeList(using querySelectorAll) = static collected of HTML elements by (id, class, element) can be created by using querySelcetorAll()
//similar to an array, but no(map, filter, reduce)
// .Nodelist wont update to automatically reflect changes

let buttons = document.querySelectorAll(".buttons")
buttons.forEach((button)=>{
button.style.border= "none"
button.style.background= "yellow"

})

buttons.forEach((button) =>{
    button.addEventListener("dblclick", event =>{
    event.target.style.background = "lightgreen"

    })
})
buttons.forEach((button) =>{
    button.addEventListener("mouseover", event =>{
    event.target.style.background = "green"

    })
})
buttons.forEach((button) =>{
    button.addEventListener("mouseout", event =>{
    event.target.style.background = "yellow"
    })
})

const newbutton = document.createElement("button")
newbutton.textContent = "Button 5"
newbutton.classList = "buttons"
document.body.appendChild(newbutton);   // appendchild instead of append makes it to inherit the style from css   
console.log(buttons)

 buttons = document.querySelectorAll(".buttons")  // reassign to make it updated
console.log(buttons)

//remove an element
buttons.forEach((button) =>{
    button.addEventListener("click", event =>{
    event.target.remove()
     buttons = document.querySelectorAll(".buttons")  // reassign to make it updated
console.log(buttons)

    })
})


// classList lesson
const buttonel = document.getElementById("buttonel")
buttonel.classList.add("enabled")      //.classList.add() will add a specific css style to an item
buttonel.classList.remove("enabled")    // this will remove css style

// buttonel.classList.add("hover") 
buttonel.addEventListener("mouseover", event =>{
    // event.target.classList.add("hover")
    event.target.classList.toggle("hover") // .toggle() does both work of .add() and . remove()
})
buttonel.addEventListener("mouseout", event =>{
    // event.target.classList.remove("hover")
    // event.target.classList.toggle("hover")
})

//.replace("oldclass", "newclass")
buttonel.addEventListener("mouseover", event =>{
    event.target.classList.replace("hover", "disabled")
})
buttonel.addEventListener("mouseout", event =>{
    event.target.classList.replace("disabled", "enabled")
})

//contains() will return true/false if the conditions are either
    buttonel.addEventListener("mouseover", event =>{
 event.target.classList.contains("disabled") ? event.target.textContent += " 😎" :  event.target.classList.replace("enabled", "disabled")
// if(event.target.classList.contains("disabled")){
//     event.target.textContent += " 😎" 
// }else{
//     event.target.classList.replace("enabled", "disabled")
// }
    })

//  document.getElementById("newh1").classList.add("enabled")
const newh1 =  document.getElementById("newh1")
newh1.classList.add("enabled")

 newh1.addEventListener("mouseover", event =>{
    // event.target.classList.add("hover")
    event.target.classList.toggle("hover") // .toggle() does both work of .add() and . remove()
})


//using .forEach() with classList

buttons.forEach((button)=>{
button.addEventListener("mouseover", event =>{
    event.target.classList.toggle("hover") // .toggle() does both work of .add() and . remove()
})

})
