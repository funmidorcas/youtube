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
