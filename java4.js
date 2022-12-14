//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(Object.values(person3))

for (let key in person3){
    console.log(person3[key])
}      

//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person {
    constructor(name, age){
    this.name = name
    this.age = age
}
    printInfo = () => {
        console.log(`${this.name} ${this.age}`)
    }
    addAge = () => {

        return parseInt(this.age++)
    }
    addAge2 = () => {

        return parseInt(this.age) +3 
    }
 
}

const person1 = new Person('Allen', '35')
const person2 = new Person('Greg', '42')
console.log(person1.printInfo())
console.log(person1.addAge())
console.log(person1.addAge())
console.log(person1.addAge())
console.log(person2.addAge2())

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const check_string = (word) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (word.length >= 10){
                resolve('Big Word')
            } else {
                reject('Small Number')
            }
        }, 2000)
    }
)}

const response = check_string('alphanumeric')
console.log(response)


/*
Codewars Problem 1:
DESCRIPTION:
Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(string){
    return string.split("").reverse().join("")
}
console.log(solution('world'))

/*

Codewars Problem 2:
String repeat
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times

*/


function repeat_str(repeat, string){
    return parseInt(repeat) * string
}

console.log(repeat_str(6 , 'hello'))