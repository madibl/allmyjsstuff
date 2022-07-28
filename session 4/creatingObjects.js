var pokemon1 = {
    name: 'Charmander',
    type: 'Fire',
    health: 100,
};
var pokemon2 = {
    name: 'Snorlax',
    type: 'Normal',
    health: 100,
};

console.log(pokemon1);

//to print out certain attribute
console.log(pokemon1.name);

//reassigning values
pokemon1.health = 90;
console.log(pokemon1.health);

//can also do math
pokemon1.health = pokemon1.health - 10;
pokemon1.health -= 10;
console.log(pokemon1.health);
