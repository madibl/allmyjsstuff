//use forEach loops on arrays
let favoriteBooks = ['The Testing', 'Nebula', 'IT', 'Maze Runner', 'Crime and Punishment']

//showBOok is passed in a string and then it prints it out
function showBook (book){
    console.log(book);
}

//nameOfArray.forEach(nameOfItem => what to do with each item)
//for each book in favorite books
favoriteBooks.forEach(book => showBook(book))