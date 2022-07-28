var pokemon1 = {
    name: 'Charizard',
    type: 'Fire',
    type2: 'Flying',
    health: 100,
};
var pokemon2 = {
    name: 'Snorlax',
    type: 'Normal',
    health: 100,
};
var pokemon3 = {
    name: 'Gengar',
    type: 'Ghost',
    health: '100',
};

let pokedex = [
    pokemon1, 
    pokemon2, 
    pokemon3
];

console.log(pokedex);

//since it is an array you can use array functions
console.log(pokedex.length);

pokedex.push(
    {
        name: 'Jolteon',
        type: 'Electric',
        health: 100,
    }
)

console.log(pokedex);
console.log(pokedex.length);

console.log(pokedex[pokedex.length - 1].name);