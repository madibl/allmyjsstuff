//can declare a variable with let, var, or const

//var most common
var bodyCountLol = 100;
//to print
console.log(bodyCountLol)
console.log(bodyCountLol + 99)
console.log("wink wink")

//let is local, meaning that if I declare a variable with let, we can only use it in a certain space
function name() {
    let myName = "Madi";
}
//Here, the variable can only exist within the function so if we tried to print it outside the function it wouldn't work

//const (or constant) variables cannot change!! 
const dateOfBirth = "August 16, 2005";
console.log(dateOfBirth)

//If you try to change it, it will give you an error
//dateOfBirth = "september 3";
//console.log(dateOfBirth)

//------------------Variable Types----------------------

//there are different variable types, but unlike other languages (ahem, Java), JS doesnt make you assign a type

//numbers
let myTestScore = 98.5;

//Strings
//needs to be in quotes! (can be double or single)
let samsFavFood = "sushi";
let AJFavFood = "Kit Kat"

console.log("Sam's favorite food is " +samsFavFood + ". AJ's favorite food is " +AJFavFood)

//Booleans
//true or false
let iAmCool = true;