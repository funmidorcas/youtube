// alert and prompt disturb
// window.alert(window.location)   // same as
// alert(location.href)    // shows the url of the page
// alert(location)    // shows the url of the page

const myArray = ["apple", "banana", "orange", "mango"]
console.log(myArray[2])  // to access array element

const myObject = {
    name: "funmi",
    age: 23,
    city: "lagos",
    hobbies: ["eat", "sleep", "code"],
    logName: function(){
        console.log(`my name is ${this.name}`)   // this keyword refers to the object itself
    }
}
myObject.logName()
console.log(myObject.age)

//for local storage for myObjectt
localStorage.setItem("mylocalStore", JSON.stringify(myObject))
// localStorage.removeItem("mylocalStore")    // will retun null, it works
const mylocalData = JSON.parse(localStorage.getItem("mylocalStore"))
console.log(mylocalData)
// const key = localStorage.key(0)
// console.log(key)
// localStorage.clear() 


//local storage for myArray
localStorage.setItem("myarrayStore", JSON.stringify(myArray))
// localStorage.removeItem("myLocalStore") // removing the specify item from the storage
// localStorage.clear()     //clear all the list of items in the storage
// const keys = localStorage.key(0)
const length = localStorage.length
const myLocalData = JSON.parse(localStorage.getItem("myarrayStore"))
console.log(myLocalData)
console.log(keys)     // show in the console bcos it is console.log()  the name of the key
console.log(length)    // show in the console the list of items in sthe localStorage


//regex lesson

document.getElementById("number").addEventListener("input", event =>{
    const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
  const input = document.getElementById("number")
  const format = document.querySelector(".format") 
  const phone = input.value 
  const found = regex.test(phone)
 if(!found && phone.length){
input.classList.add("invalid")
format.style.display = "block"
format.classList.add("block")
 } else{
    input.classList.remove("invalid")
    format.classList.remove("block")
    format.style.display = "none"

 }
})
document.getElementById("form").addEventListener("submit", event=>{
    event.preventDefault()
  const input = document.getElementById("number")
  const regex = /[()-. ]/g
  const saved = input.value.replaceAll(regex, "")
  console.log(saved)
})


document.getElementById("textform").addEventListener("submit", event =>{
        event.preventDefault()
const input = document.getElementById("enter")
const regex = / {2,}/g
const newText = input.value.replaceAll(regex, "").trim()
const submit = document.getElementById("submit")
console.log(newText)
const encode = encodeURI(input.value)
const encodeText = encodeURI(encode)
console.log(encode)
console.log(encodeText)
})