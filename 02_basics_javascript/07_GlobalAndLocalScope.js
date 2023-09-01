let a = 10;
const b = 20; 
var c = 30 ;

console.log(a)
console.log(b)
console.log(c)

// {} is the scope 
// lets understand this socpe using if statement 
if(true){
    let p = 10;
    const q = 20;  // the values written in the {} scope is block scope & values written outside the scope is global scope
    var r = 30 ;
}


// console.log(p)
// console.log(q)
console.log(r)
// when we trying to print p q r one after another it giving us error but when we are trying to run r only this will printing the value of r 


//--------------------------------------------------------------------------------

let num1 = 100;
if(true){
   let num1 = 10;
}
console.log(num1) // here the value of global scope is printed i.e. 100