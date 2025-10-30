//Rock paper scissors
const choices = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")

function playgame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)]
    let result = ""
  if(playerChoice === computerChoice){
     result = "IT IS A TIE" 
}else{
    switch(playerChoice){
case "rock":
     result =  (computerChoice === "scissors") ? "YOU WIN" : "TRY AGAIN"
      break
case "paper":
    result =  (computerChoice === "rock") ? "YOU WIN" : "TRY AGAIN"
      break
case "scissors":
    result = (computerChoice === "paper") ? "YOU WIN" : "TRY AGAIN"
      break

}
}
playerDisplay.textContent = `PLAYER: ${playerChoice}`
computerDisplay.textContent = `COMPUTER: ${computerChoice}`
resultDisplay.textContent = result
// if(resultDisplay.textContent === "YOU WIN"){
//     resultDisplay.classList.add("greenText")
// }else if(resultDisplay.textContent === "TRY AGAIN"){
//     resultDisplay.classList.add("redText")
// }else{
//        resultDisplay.classList.remove("greenText", "redText")
 
// }
resultDisplay.classList.remove("greeenText", "redText")
switch(result){
    case "YOU WIN":
    resultDisplay.classList.add("greenText")
    player++
    playerscore.textContent = player
    break
    case "TRY AGAIN":
    resultDisplay.classList.add("redText")
    computer++
    computerscore.textContent =  computer
    break
}
}
const playerscore = document.getElementById("playerscore")
playerscore.classList.add("redText")
const computerscore = document.getElementById("computerscore")
 computerscore.classList.add("greenText")
 let player  = 0
 let  computer = 0



 //IMAGE SLIDER code    // i can write class and tagname together inside querryselectorAll

 const slides = document.querySelectorAll(".slides img")
 let slideIndex = 0
 let intervalId  = null 
// initializeSlider() 
 // we can say the images to wait for all domcontent to load bfor start showing 

document.addEventListener("DOMContentLoaded", initializeSlider)



 function initializeSlider(){
    if(slides.length > 0){                              // to make sure it stop wen it finish
   slides[slideIndex].classList.add("displayslide")
   intervalId = setInterval(nextslide, 5000)     // after 5 seconds show next image asin automatically
    }
 }
 function showSlide(index){
if(index >= slides.length){
slideIndex = 0
}else if(index < 0){
    slideIndex = slides.length - 1


}else{
slideIndex = index
}

slides.forEach(slide => {
    slide.classList.remove("displayslide")
})
slides[slideIndex].classList.add("displayslide")
 }

 function prevslide(){
    clearInterval(intervalId)
    slideIndex--
    showSlide(slideIndex)
 }
 function nextslide(){
slideIndex++
showSlide(slideIndex)

 }
  