console.log("You have 10 seconds to defeat the enemy.");

function victory(){
    console.log("You have defeated the enemy");

}
//this creates a "timer". first argument is what happens when the timer is done and second argument is the time in milliseconds (1000 milliseconds in a second)
setTimeout(victory, 10000)

//we can also create a function to run inside of the setTimeout
setTimeout(function victory(){
    console.log("You have defeated the enemy");
}, 3000);
