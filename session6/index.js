//the usual
function createSentence(sentence){
    let arrayOfWords = sentence.split(" ")
    console.log(arrayOfWords);
}
createSentence("This is a sentence");

//the anonymous function - useful for using a function that only runs once
//not gonna be calling it, so dont need a name
(function (sentence){
    let arrayOfWords = sentence.split(" ")
    console.log(arrayOfWords);
}) ("This is a sentence"); //The argument is passed after the thing

//the usual
// function creatingLoops(x){
//     for(let i = 0; i < x; i++) {
//         console.log(i)
//     }
// }
// creatingLoops(20);


//Fat arrow way: stores into a var
/* Format:

let functionName = (arguments) => {
    block of code
}

*/
let creatingLoops = (x) => {
    for(let i = 0; i < x; i++) {
        console.log(i)
    }
}
creatingLoops(10);