//AWAIT/ASYNC LESSON
async function walkdog(){
return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const walked = true
            if(walked){
resolve("dog walked")}else{
    reject(`not walked`)
}
  }, 1500)
})
}
async  function cleanKitchen(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const cleaned = true
            if(cleaned){
resolve("kitchen cleaned")}else{
    reject(`not cleaned`)
}
        }, 2000)
    })
}
async  function takeOutTrash(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const trashed = true
            if(trashed){
resolve("trash taken out")}else{
    reject(`not trashed`)
}
        }, 2500)
    })
}
async function startTasks(){
try{
    const walkresult = await walkdog()
console.log(walkresult)
const cleanresult = await cleanKitchen()
console.log(cleanresult)
const trashresult = await takeOutTrash()
console.log(trashresult)
console.log("All tasks completed ✅")
}catch(error){
    console.log(error)
}
}

startTasks()




// Json  lesson   // stringify json
const names1 = ["funmi", "mia", "john", "jack", "sara"]  // this is json format
const jsonString1 = JSON.stringify(names1) // converting to string
console.log(jsonString1)

const person1 = {"name": "funmi","age": 25,"city": "lagos","isStudent": false, "hobbies": ["reading", "traveling", "coding"]}
const jsonPerson1 = JSON.stringify(person1) // converting to string
console.log(jsonPerson1)

const people1 = [{"name": "funmi", "age": 22,"city": "lagos","isStudent": true,"hobbies": ["traveling", "coding"]},
                {"name": "mia","age": 20,"city": "Canada","isStudent": false,  "hobbies": ["reading", "traveling"]},
                {"name": "ann","age": 18,"city": "UK",  "isStudent": true, "hobbies": ["reading", "coding"]}]
const jsonPeople1 = JSON.stringify(people1) // converting to string
console.log(jsonPeople1)

//parsing json
const names =`["funmi", "mia", "john", "jack", "sara"]`// this is json format
const jsonNames = JSON.parse(names) // converting to object
console.log(jsonNames)

const person = `{"name": "funmi","age": 25,"city": "lagos","isStudent": false, "hobbies": ["reading", "traveling", "coding"]}`
const jsonPerson = JSON.parse(person) // converting to object
console.log(jsonPerson)

const people = `[{"name": "funmi", "age": 22,"city": "lagos","isStudent": true,"hobbies": ["traveling", "coding"]},
                {"name": "mia","age": 20,"city": "Canada","isStudent": false,  "hobbies": ["reading", "traveling"]},
                {"name": "ann","age": 18,"city": "UK",  "isStudent": true, "hobbies": ["reading", "coding"]}]`
const jsonPeople = JSON.parse(people) // converting to object
console.log(jsonPeople)


// fetch json lesson

fetch("people.json")
.then(response => response.json())
// .then(value => { console.log(value)})     // for combined object
.then(values => values.forEach(value => { console.log(value.name)}))   // for each single array of object i.e name, age etc
.catch(error => console.log(error))