//split: like a slice; saves a list into a new variable from a section of a string
//string.split(separator/delimeter, optional number of splits)

let stringOfNumbers = "1,2,3,4,5,6,7,8,9,";
console.log(stringOfNumbers)

let splitNumbers = stringOfNumbers.split(",");
//the delimeter is the character that you want to split the string by
//in this case, it will take each number, separate them where the commas are, and save each number into a list
console.log(splitNumbers);

let string = "This is a sentence";
let splitString = string.split(" ");
console.log(splitString);