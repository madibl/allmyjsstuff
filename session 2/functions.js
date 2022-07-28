//functions are useful for actions that need to repeatedly happen, but are too lengthy to write over and over again

//Defining Functions.
//Whatever goes in the parentheses is the parameters. When the function is called, the parameters will be given a specif value for that instance
function evenNumbers (x) {
    if(x % 2 == 0)
        return true;
    else
        return false;
}

//calling function. must pass a value into the parameter for it to run
console.log(evenNumbers(6));

//since the function only returns things, it does not print unless you tell it to or unless you do something with the return value
var num = evenNumbers(10);
console.log(num);

//modulus (or mod, notated by a %) gives the remainder of two numbers divided. For example, 5 % 3 will return 2, because 3 goes into 5 one time and there is 2 remaining