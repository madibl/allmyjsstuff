//lets start with a variable called age
//depending on what age is, it will print out to tell you if you are in middle, elementary, or high school
// 5-12 - elementary, 12-15 = middle, other = high school

let age = 7;

if(age >= 5 && age < 12){
    console.log("you must be in elementary school")
}
//if the if isnt true, it goes to the else if
else if(age >= 12 && age <=15){
    console.log("you must be in middle school")
}
else {
    console.log("you are in highschool")
}

