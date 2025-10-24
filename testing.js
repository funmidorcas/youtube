  function check(){
    console.log("hello world")
  }
   check()   //this means callback function

  function hello(callback){
    console.log("hello everyone")
    callback()

  }
  hello(leave) 
//   hello(goodbye) 

  function goodbye(){
    console.log("good bye")
  }
function leave(){
      console.log("leave now")

}


let email = prompt("Enter your email");

if (email.includes("@") && email.includes(".")  && email.includes("com")) {
  alert("correct");
} else {
  alert("not correct");
}


function isValid(email){
// if(email.includes("@")) {
//     return "correct"
// }else{
//     return "not correct"
// }
  return (email.includes("@") && email.includes(".") && email.includes("com")) ? "correct" : "not correct";

//  return email =  email.includes("@") ? "correct" : "not correct"

}
console.log(isValid("ade@gmail"))
