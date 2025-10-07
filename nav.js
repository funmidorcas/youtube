document.addEventListener("DOMContentLoaded", function () {

let open = document.querySelector("#open")
let close = document.querySelector("#close")
let house = document.querySelector("ul")

open.addEventListener("click", function(){
house.style.display = "block"
close.style.display = "block"
open.style.display = "none" 
console.log("open")
})
close.addEventListener("click", function(){
house.style.display = "none"
open.style.display = "block"
close.style.display = "none"
})
})