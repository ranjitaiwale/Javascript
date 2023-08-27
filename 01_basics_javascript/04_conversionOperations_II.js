let value = 5;
let negValue = -value;
console.log(negValue)

/*
Here we learn the addition of string and number and some concepts of it*/

console.log("3"+2+3); // This will print 323 as the string is first written it converts all numbers into strings
console.log(2+3+"4"); // This will print 54 as the string is not written first 

// let's take some more example of this type

console.log(+true); //This will print 1

// lets see how operator presedence work 

let gameCounter = 100;
console.log(gameCounter++); // this will print 100
console.log(++gameCounter); // this will also print 101 

// In first case it first take value and then increment and complete operation
// In second case it first increment value and then complete operation. 
