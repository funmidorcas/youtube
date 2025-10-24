// setTimeout() =  function in javascript that allows you to schedule the execution of a function after an amount of time (mileseconds)
//times are approximate (varies based on the workload of the javaScripts runtime env.)
//setTimeout(useCallback, delay)
// clearTimeout(keywill be here) = can cancel a timeout before it triggers
function sayHello(){
   console.log("hello first")
}
setTimeout(sayHello, 3000)

// example 2
setTimeout(function(){
    console.log("hello big world")}, 3000);
// setTimeout(() => alert("hello bro code"), 3000);   // disturb me on the page lol

//clearTimeout lesson   clear settimeout code
const timeout = setTimeout(function(){console.log("hello my world")}, 3000);
clearTimeout(timeout) // this already clear it away asap

//example
let timing
function startTimer(){
    timing = setTimeout(() => console.log("i am Funmi"), 3000)
}
startTimer()
function clearTimer(){
    clearTimeout(timing)
}
clearTimer()            // this invoke have perform  clearing  timing in startTimer()



// setInterval()  lesson //it repeatdly calls a function after a specified time
function callHello() {
  console.log("Hello!");
}
let times = setInterval(callHello, 1000);                    // runs every 1 second
clearInterval(times);                                         //this have clear it away immediately 
 
function getHello() {
  console.log("Hello now!");
}
let timed = setInterval(getHello, 1000); // run every 1 second
setTimeout(() => clearInterval(timed), 2000);    // to stop it after  2s of running incase i want it to run for a bit

// setTimeout(() => {
//   clearInterval(timed);      // to  see it in console
//   console.log("Stopped!");
// }, 3000); 




//digital clock program
let clock = document.getElementById("clock")
function updateclock(){
const date = new Date()
let hours = date.getHours()
const amPm = hours >= 12 ? "PM" : "AM"
hours = hours % 12 || 12
hours = hours.toString().padStart(2,0)
const min = date.getMinutes().toString().padStart(2,0)
const sec = date.getSeconds().toString().padStart(2,0)
const timeString = `${hours}:${min}:${sec} ${amPm}`;
clock.textContent = timeString;
}
updateclock()
setInterval(updateclock, 1000)

//stopwatch building
 const display= document.getElementById("display")
 let timer = null
 let starttime = 0
 let elapsedtime = 0
 let isRunning = false

 function start() {
    if(!isRunning){
        starttime = Date.now()   //built-in class and method
        timer = setInterval(update,10)
        isRunning = true
    }
 }
 function stop() {
    if(isRunning){
        clearInterval(timer)
        elapsedtime = Date.now() - starttime
        isRunning = false

    }
 }
 function reset() {
    clearInterval(timer)
 starttime = 0
     elapsedtime = 0
     isRunning = false
     display.textContent = "00:00:00:00"
 }
 function update() {
    const currenttime = Date.now()
    elapsedtime = currenttime - starttime 

    let hour = Math.floor(elapsedtime / (1000 * 60 *60))
    let minutes = Math.floor(elapsedtime / (1000 * 60) % 60)
    let second = Math.floor(elapsedtime / (1000 % 60))
    let milisecond = Math.floor(elapsedtime % 1000 / 10)
   
    hour = String(hour).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    second = String(second).padStart(2, "0")
    milisecond = String(milisecond).padStart(2, "0")

    display.textContent = `${hour}:${minutes}:${second}:${milisecond}`
 }


 


