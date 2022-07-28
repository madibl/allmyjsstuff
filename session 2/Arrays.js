//Creating an array (like a list)
let favoriteColors = ["Blue", "Pink", "purple", "Red", "green"];

//Indexing: starts with 0
console.log(favoriteColors[0]);

//prints the length of the list (how many items in list). In this case, it is 5
console.log(favoriteColors.length);

//Prints the last item of the array
console.log(favoriteColors[favoriteColors.length - 1]);

//Can save it into a variable as well
var frogsFavColor = favoriteColors[favoriteColors.length - 1];

//Adding items to the array
favoriteColors.push ('Orange');

//Length is now 6
console.log(favoriteColors.length);
