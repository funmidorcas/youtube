console.log(`hello world`)

// alert(`learnig js`) 
document.getElementById(`myH1`).textContent=`hello world`
document.getElementById(`myP`).textContent=`learning Js`

let x = 123
console.log(x)
let y =3
console.log(x+ y)
console.log(`you are wonderful ${x*y} `)
console.log(typeof x)

let firstName = "Funmi"
let lastName = "Adeniji"
console.log(`my name is ${firstName} ${lastName}`)
console.log(typeof firstName)

let online = true
console.log(typeof online)
console.log(`am i online?: ${online}`)

let fullName =firstName + " " + lastName
console.log(fullName)
let age = 25 
let student = false
console.log(student)
document.getElementById("p1").textContent =  `my name is ${fullName}`
document.getElementById("p2").textContent = `i am ${age} years old`
document.getElementById("p3").textContent = ` Enroled: ${student}`

let students = 30

console.log(students)
// reassigning students
//students = students + 1  // or students++ 
// console.log(students)

// students = students / 2   
// console.log(students)
  

//students = students ** 3  // raise to power sign is **
//console.log(students)

 // students = student % 2 // % modulus sign will divide evenly then write the remaining number 
//  console.log(students)

 students += 1;  console.log(students) //students++ 

 students -= 1;   console.log(students)

 students *= 1;     console.log(students)

 students --;       console.log(students)




let result = 1 + 2 * 3 + 4** 2
console.log(result)

let username = prompt("what is your name")
console.log(username)
let usename = document.getElementById("myText").value 
let submit = document.getElementById("submit")
submit.addEventListener("click",function(){
   let usename = document.getElementById("myText").value 

    console.log(usename)
     document.getElementById("change").textContent = `Hello ${usename}`
    
})

let btn  = document.querySelector(".btn")
btn.addEventListener("click", function(){
    let note = document.querySelector(".note")

    note.style.display = "block"
    note.style.background = "red"
    btn.style.display = "none"
    //  document.querySelector(".btn")
     btn.textContent = note

})
//     let note = document.querySelector(".note")
// note.addEventListener("click", function(){
//   let btn  = document.querySelector(".btn")
//     btn.style.display = "block"
//         note.style.display = "none"

//     //  document.querySelector(".btn")
//      note.textContent = btn

// })




let myAge = prompt("How old are you")
//type  conversion is the Number use below
myAge = Number(myAge) 
myAge+=1
 console.log(myAge, typeof myAge)

// i dont knw why this code did not take let
  x = "pizza"
  y = "pizza"
  z ="pizza"
x= Number(x)
y = String(y)
z =Boolean (z)
console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)

// let pi = 3.14159
// let radius
// let circumference
//  pi = 420.69
// radius =prompt("Enter the radius of a circle")
// radius = Number(radius)
// circumference = 2 * pi* radius

// console.log(circumference)

let radiusSub = document.getElementById("radiusSub")

radiusSub.addEventListener("click", function(){
    let radiusIn = document.getElementById("radiusIn").value 

    let radious = document.getElementById("radious")

    let pi = 3.1415
       radiusIn = Number(radiusIn)

let circumference = 2 * pi* radiusIn

    radious.textContent = circumference

console.log(circumference)
})

    let increase = document.querySelector("#increasebtn")
 count = 0
    increase.addEventListener("click", function(){
  let countlabel = document.querySelector("#countlabel")
  countlabel.textContent = count++
  console.log(countlabel)
    })

    let decrease = document.querySelector("#decreasebtn")
    decrease.addEventListener("click", function(){
      if (count > 0){
  let countlabel = document.querySelector("#countlabel")
  countlabel.textContent = count--
  console.log(countlabel)
      }
    })

let reset = document.querySelector("#reset")
reset.addEventListener("click", function(){
    let countlabel = document.querySelector("#countlabel")
  countlabel.textContent = 0

})

// let checkout = document.querySelector("#checkoutbtn")
// checkout.addEventListener("click", function(){
//    let print = document.querySelector(".get")
//       let countlabel = document.querySelector("#countlabel")
//    print.textContent =  `the result is ${countlabel.textContent}, `

//       countlabel.textContent = 0


// })
 function save(){
let checkout = document.querySelector("#checkoutbtn")
checkout.addEventListener("click", function(){
     let countStr = count + "-" 
  let print = document.querySelector(".get")
      let countlabel = document.querySelector("#countlabel")
   print.textContent += countStr

      countlabel.textContent = 0
    })

  }
  save()

  // math lesson  Math.floor(),Math.round(), Math.ceil, Math.trunc etc
let g = 16
  let k = -3.23
  let kk = 4.99
  let ke = 2.11
  let b = 2
  let r = 3
  console.log(g.toFixed(1)) // 1 decimal place or as required
  let s = Math.round(k)
console.log(s)
let u = Math.floor(kk)  // floor: round down like ignore the decimal even if its .99
console.log(u)
let m =   Math.ceil(ke)  // opposit of floor, .ceil round up decimal number
console.log(m)  
let bc = Math.trunc(k) // remove all decimal number
console.log(bc) 
let bd = Math.pow(r, b) // raise to power math
console.log(bd)
let f = Math.sqrt(g) // square root
console.log(f)
let  by = Math.log(kk)  // or longrith
console.log(by)
let n =  Math.sin(k)  //sine
console.log(n)
let j = Math.cos(k) //cosine
console.log(j)
let o =  Math.tan(k)  //sine
console.log(o)
let l =  Math.abs(k)  // remove (-) negative from number
console.log(l)
let a =  Math.sign(k)  // it will show sign if negative or positive (positive dont show sign) 
console.log(a)
let min = Math.min(k,kk,b,r) // it shows minimum value
console.log(min)
let max = Math.max(k,kk,r,b) // it shows maximum number
console.log(max)



// random number generator
let randomNum = Math.floor(Math.random()*6) + 1 // math.floor clear decimal
console.log(randomNum)

let roll = document.querySelector("#roll")
let minn = 1
let maxx = 6
  let results = document.querySelectorAll(".result")
roll.addEventListener("click", function(){
  results.forEach(function(results){
  results.textContent = Math.floor(Math.random()* maxx) + minn
  results.textContent = Math.floor(Math.random()* maxx) + minn
  results.textContent = Math.floor(Math.random()* maxx) + minn
})
})
// roll.addEventListener("click", function(){
//   // let result = document.querySelector(".result")
//   // let result2 = document.querySelector(".result2")
//   // let result3 = document.querySelector(".result3")
//   result.textContent = Math.floor(Math.random()* maxx) + minn
//   result.textContent = Math.floor(Math.random()* maxx) + minn
//   result.textContent = Math.floor(Math.random()* maxx) + minn

// })


//if statement lesson
let ages = 13
if(ages >= 18){
  console.log(`you are welcome here`)
}else{
  console.log( `not yet`)
}
  let text = document.querySelector("#text")

let submitted = document.querySelector("#submitted")
let response = document.querySelector("#response")

submitted.addEventListener("click", function(){
 let aged = text.value
  aged = Number(aged)
  response.textContent = aged
if(aged >= 18){
  response.textContent =    `You are eligible`
    aged = 0

}else{
    response.textContent = `You are not qualify`
  aged = 0

}
text.value = 0
})

// how to make checkbox/radio box to submit

let submith = document.querySelector("#submith")
let visa = document.querySelector("#visa")
let master = document.querySelector("#master")
let paypal = document.querySelector("#paypal")
let payResult = document.querySelector("#payResult")
let checkbox = document.querySelector("#checkbox")
let subResult = document.querySelector("#subResult")
let checked = true
submith.addEventListener("click", function(){
  if(checkbox.checked){
    subResult.textContent = `you have subscribed`
  }

   else if(visa.checked){
    payResult.textContent = `you are paying with visa`
   }
   else if(master.checked){
    payResult.textContent = `you are paying with master`
   }
   else if(paypal.checked){
    payResult.textContent = `you are paying with paypal`
  }else{
        payResult.textContent = `you must select a paying card`

  }
})


// ternary operator: a shortcut to if() and else(), helps to assign a variable based on condition

let aged = 31
 let conditions = aged >= 18 ? "you are an adult" : " you are not an adult"
console.log(conditions)
//alternative or shortcut to
if( aged >= 18){
  console.log("you are an adult")
}else{
    console.log("you are not an adult")

}

let amt = 99
let discount = amt >= 100 ?  10 : 0
console.log(`your total is ${amt - amt * (discount/100)}`)
// breakdown
//amt >= 100 = conditions that use to be in b() ie if(amt >- 100)
// /? = if, to be follow by the statement
// : = else, to be follow by the statement


// SWITCH = can be efficient replacement to many else if statements
 let day = 4
 switch(day){
  case 1 :
     console.log(`its monday`)
     break
  case 2 :
     console.log(`its teusday`)
     break
  case 3 :
     console.log(`its wednessday`)
     break
  case 4 :
     console.log(`its thurday`)
     break
  case 5 :
     console.log(`its friday`)
     break

 }

 let house = "yellow"
 switch (house) {
  case "red":
    console.log("its true")
    break;
 
  case "blue":
    console.log("no no")
    break;
    default:
         console.log("not match")
 
 }

 let testScore = 16
 let letterGrade 

  switch(true){
    case testScore >= 90:
    letterGrade = "A"
    break
    case testScore >=80:
      letterGrade = "B"
      break
      case testScore >=70:
      letterGrade = "C"
      break
      case testScore >=60:
      letterGrade = "D"
      break
      case testScore >=50:
      letterGrade = "E"
      break

      default:
      letterGrade= "F"
  }
  console.log(letterGrade)


  //strings methods = allow manipulation and work with text (string) i.e let name = "funmi": funmi is a string
// chartAt() help to get position (index) of a string text
  let userName = "  funemite"
  console.log(userName.charAt(1))
  
  //index0f() will return the index number of a letter or text of  a string 
   console.log(userName.indexOf("t"))
   console.log(userName.lastIndexOf("e"))
   console.log(userName.length)
   console.log(userName.trim())  
   //.trim() :trim whitespace away cos some value from user might have white/emptyspace

   console.log(userName.toLowerCase())  
   console.log(userName.toUpperCase())  
   console.log(userName.repeat(3))  
   console.log(userName.startsWith("   "))  
// meaning it start with 3 white/emptyspace or however the works/code/strings
   console.log(userName.endsWith("   "))  

   console.log(userName.includes("x"))  

// if (userName.includes("x")){
// if (userName.startsWith("   ")){
if (userName.endsWith("k")){
  console.log("yes its there")
}else{
    console.log("not included")
}

let phoneNumber = "123-456-789"
 phoneNumber = phoneNumber.replaceAll("-", "/")  // this is kind of similar to .splice()
 console.log(phoneNumber)
 // means replace all - with / or whaterver we want to  change
 phoneNumber = phoneNumber.replace("2", "0")  // for single 
 console.log(phoneNumber)
//  phoneNumber = phoneNumber.padStart(15, "23")  // 15 states how i want it to be long/number of character i want, 23 position  means what shld fill the space and its on repeat in the begining
//  console.log(phoneNumber)

  phoneNumber = phoneNumber.padEnd(15, "0")  // 15 states how i want it to be long/number of character i want, 23 position  means what shld fill the space and its on repeat in the end
 console.log(phoneNumber)  // value has to be in string


 //string slicing = creating a substring from a portion of another string i.e string.slice(start here, end here)
// to delete everthing that is not in the range i picked either front or back
 let fullname = "Funmi Adeniji dorcas"
 let firstname = fullname.slice(0, 5) // it will remove the last indexnumber so i make it 5 to make sure funmi is complete
 console.log(firstname)
 let lastname = fullname.slice(5, 13)
  console.log(lastname.trim(" "))
console.log(fullname.slice(-1)) // - start count from the back

console.log(fullname.slice(0, fullname.lastIndexOf(" ") + 2))
//this start from where there is whitespace
console.log(fullname.slice(fullname.indexOf(" ")))

let email = "oladipodorcas@gmail.com"
let emial = email.slice(0, email.indexOf("@"))
console.log(emial)
console.log(email.slice(email.indexOf("@") - 3)) // to have the last part 

//.toFixed()  control the decimal
let yes = 3.412345
console.log(yes.toFixed(2))

console.log(Number("12.34")) // return strictly number from string that have only number, boolean
console.log(Number("12a.34")) 
console.log(parseFloat("12.34")) // not as strict as Number()
console.log(parseFloat("12a.34")) 

let mark = ["good", "boy"]
let joinmark =  mark.join("-")
console.log(joinmark)
let learn = ["this is a boy","that is a girl","now is the time"]
let learned = learn.join(" ")
console.log(learned.split(","))// means split when you see coma(,)

// setTimeout(function, delay) lesson and the function call be a callback or a function expression(check fifth.js for function expression)

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);
