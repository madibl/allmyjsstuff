//filter out the gen Z birth years (1997-2015)

let years = [1996, 2000, 1998, 2006, 1989, 2013]

//getGenZ will take in one year and prints it out only if it is a Gen Z birth year
function getGenZ(birthYear) {
    if (birthYear >= 1997 && birthYear <= 2015){
        console.log(birthYear)
    }
}

const genZ = years.filter(year => getGenZ(year));