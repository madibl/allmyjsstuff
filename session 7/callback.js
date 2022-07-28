let numbers = [230, 1, 4000, 79, 534]

//sorting takes in an array as an argumemt/parameter, sorts the array in decending order, then prints it out
function sorting(array){
    let sorted = array.sort(
        function(a, b){
            return b - a;
        }
    );
    console.log(sorted);
}

//addNumber takes in an array and the name of a function (callback). Pushes number to array , calls the callback (sorts the array)

function addNumber(array, callback){
    array.push(3030); //adds 3030 to end of array
    callback(array);
}

addNumber(numbers, sorting);
