// inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child), helps with code reusability

class Animal{                     // parent class
    alive = true

    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
                console.log(`This ${this.name} is sleeping`)

    }
}

class Rabbit extends Animal{                      //child class
    name = "rabbit"
    // alive = true


    run(){
        console.log(`This ${this.name} is running`)
    }
    // sleep(){
    //             console.log(`This ${this.name} is sleeping`)

    // }
}
class Fish extends Animal{
    name = "fish"
    // alive = true

    swim(){
        console.log(`This ${this.name} is swimming`)
    }
    // sleep(){
    //             console.log(`This ${this.name} is sleeping`)

    // }
}
class Hawk extends Animal{
    name = "hawk"
    alive = false

    fly(){
        console.log(`This ${this.name} is flying`)
    }
    // sleep(){
    //             console.log(`This ${this.name} is sleeping`)

    // }
}
const rabbit = new Rabbit()
const fish = new Fish()
const hawk = new Hawk()
const ani = new Animal()

console.log(fish.name)
console.log(ani.alive)
console.log(hawk.alive)
console.log(rabbit.name)
rabbit.eat()
rabbit.sleep()
rabbit.run()
hawk.fly()
fish.swim()


// super = keyword is used in clasess to call the constructor of access the properties and methods of a parent (superclass)
//this = this object
// supper = the parent

class Animals{
constructor(name, age){
    this.name = name
    this.age = age
}
move(speed){
    console.log(`the ${this.name} moves at a speed of ${speed}mph`)
}
}
class Cat extends Animals{
   constructor(name,age,sleepSpeed){
    super(name,age)
    this.sleepSpeed = sleepSpeed
}
sleep(){
    console.log(`the ${this.name} sleep at a speed of `)
}

}
class Dog extends Animals{
   constructor(name,age,huntSpeed){
    super(name,age)
    this.huntSpeed = huntSpeed
}
hunt(){
    console.log(`the ${this.name} hunt at a speed of`)
}

}
class Horse extends Animals{
   constructor(name,age,jumpSpeed){
    super(name,age)
    this.jumpSpeed = jumpSpeed
}
jump(){
    console.log(`the ${this.name} jump at a speed of`)
}

}
const cat = new Cat("cat", 1, 25)
cat.sleep()
const dog = new Dog("dog",2,12)
dog.hunt()
const horse = new Horse("horse",3,50)
horse.jump()


// getter(get)  = special method that makes a property readable
// setter(set) = special method that makes a property writeable
// they help to validate and modify a value when reading/writing a property

class Rectangle{
    constructor(width, height){
    this.width = width
    this.height = height
    }
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth                      // using '_' is to let another devloper knw that this width is(a private property) not the same as one in the construtor argument or to show that its different
        }else{
            console.error("width mst be a positive number")
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight                     // using '_' is to let another devloper knw that this width is(a private property) not the same as one in the construtor argument or to show that its different
        }else{
            console.error("height mst be a number")
        }
    }
        get width(){
        return `${this._width.toFixed(1)}cm`
    }

    get height(){
        return `${this._height.toFixed(1)}cm`
    }
    get area(){
        return `${(this._width * this._height).toFixed(1)}cm^2`
    }
}

const rectangle = new Rectangle(5, 7)
console.log(rectangle.width)
console.log(rectangle.area)  
console.log(rectangle.height)  
// or
// rectangle.width = 14
// console.log(rectangle.width)


// example 2 of set and get
class Person{
    constructor(firstname, lastname, age){
      this.firstname = firstname
      this.lastname = lastname
      this.age = age
    }
  set firstname(newfirstname){
    if(typeof newfirstname === "string" && newfirstname.length > 0){
//   this.firstname = newfirstname   // it works here without'_'
  this._firstname = newfirstname
    }
    else{
        console.error(`not words`)
    }
  }
  set lastname(newlastname){
    if(typeof newlastname === "string" && newlastname.length > 0){
//   this.lastname = newlastname   // it works here without'_'
  this._lastname = newlastname
    }
    else{
        console.error(`it mst be a word`)
    }
  }
  set age(newage){
    if(typeof newage === "number" && newage >= 0){
//   this.age = newage   // it works here without'_'
  this._age = newage
    }
    else{
        console.error(`it mst be a number`)
    }
  }
get firstname(){
    return this._firstname
}
get lastname(){
    return this._lastname
}
get age(){
    return this._age
}
get fullname(){
    return `${this._firstname} ${this._lastname}`
}
}

const person = new Person("mark", "john", 20)
console.log(person.lastname)
console.log(person.firstname)
console.log(person.age)
console.log(person.fullname)