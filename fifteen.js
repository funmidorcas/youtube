 //callback Hell lesson

// function task1(){
//     setTimeout(() => {  console.log("Task 1 completed")}, 2000)}
// function task2(){
//     setTimeout(() => 
//           {  console.log("Task 2 completed")}, 4000)}
// function task3(){
//     setTimeout(() => 
//           {  console.log("Task 3 completed")},1000)}
// function task4(){
//     setTimeout(() => 
//           {  console.log("Task 4 completed")},3000)}
// function task5(){
//     setTimeout(() => 
//           {  console.log("Task 5 completed")},1500)}
// task1();
// task2();
// task3();
// task4();
// task5();
// all this code didnt run in order bcos of the settimeout function used
// to make them run in order we use callback function
console.log("new code below");

function task1(callback){
    setTimeout(() => {  
        console.log("Task 1 completed")
        callback()}, 2000)}
function task2(callback){
    setTimeout(() => 
          {  console.log("Task 2 completed")
          callback()}, 4000)}
function task3(callback){
    setTimeout(() => 
          {  console.log("Task 3 completed")
          callback()},1000)}
function task4(callback){
    setTimeout(() => 
          {  console.log("Task 4 completed")
          callback()},3000)}
function task5(callback){
    setTimeout(() => 
          {  console.log("Task 5 completed")
            callback() },1500)}

task1(function(){
    task2(function(){
        task3(function(){
            task4(function(){
                task5(function(){
                    console.log("All tasks completed")
                })
            })
        })
    })
});

// Promise Lesson
// A promise is a placeholder for a future value

function walkdog(){
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
function cleanKitchen(){
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
function takeOutTrash(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const trashed = false
            if(trashed){
resolve("trash taken out")}else{
    reject(`not trashed`)
}
        }, 2500)
    })
}


walkdog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("All tasks completed")})
            .catch(error => {console.log(error)})
              