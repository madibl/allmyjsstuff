//repeats an action every interval of time(in milliseconds)
let counter = 10;
function coolDown(){
    if(counter > 0){
        console.log(counter);
        counter--;
    }
}

//we want to call cooldown every 3 seconds
setInterval(coolDown, 3000);

//can also put funtion within the setInterval function
setInterval(function coolDown(){
    if(counter > 0){
        console.log(counter);
        counter--;
    }
}, 3000);